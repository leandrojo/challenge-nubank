import { of } from 'rxjs';
import {
  map, catchError, mergeMap,
} from 'rxjs/operators';
import { ofType } from 'redux-observable';
import Decimal, { isDecimal } from 'decimal.js';

import {
  camelize, compose, dasherize, normalize,
} from 'common';

import { output } from './simulate.actions';

export function EntriesException(violations) {
  this.violations = violations;
  this.message = 'does not conform to the expected format for calc.';
  this.toString = () => `${this.violations.join(', ')}, ${this.message}`;
}

export function prepare(values) {
  return normalize(values, {
    handleKeys: camelize,
  });
}

export function convert(values) {
  return Object
    .entries(values)
    .reduce((obj, [k, v]) => ({ ...obj, [k]: typeof v === 'object' ? v : new Decimal(v) }), {});
}

export function validate(values) {
  const violations = Object
    .entries(values)
    .map(([k, v]) => {
      if (isDecimal(v) === false) return false;
      if (v.isNegative()) return `invalid-${dasherize(k)}`;
      return false;
    })
    .filter(v => v !== false);

  if (violations.length !== 0) {
    throw new EntriesException(violations);
  }

  return {
    ...values, violations,
  };
}

export function amount(values) {
  const { initialAmount, interest, period } = values;

  // Compound Interest.
  const base = new Decimal(interest.dividedBy(100).plus(1));

  // Gross Value.
  const gross = initialAmount.times(Decimal.pow(base, period.round()));

  return { ...values, gross };
}

export function taxByPeriod({
  gross, initialAmount, period, ...values
}) {
  const tracks = [
    // - It should apply a 22.5% tax when the investment period is less or equal than 6 months;
    {
      period: {
        lessThanOrEqualTo: 6,
      },
      tax: 22.5,
    },
    // - It should apply a 20% tax when the investment period is less or equal than 12 months;
    {
      period: {
        greaterThan: 6,
        lessThanOrEqualTo: 12,
      },
      tax: 20,
    },
    // - It should apply a 17.5% tax when the investment period is less or equal than 18 months;
    {
      period: {
        greaterThan: 12,
        lessThanOrEqualTo: 18,
      },
      tax: 17.5,
    },
    // - It should apply a 15% tax otherwise.
    {
      period: {
        greaterThan: 18,
      },
      tax: 15,
    },
  ];

  const track = tracks.find(
    compose(
      t => t.period,
      rules => Object
        .entries(rules)
        .reduce((before, [k, v]) => period[k](v) && before, true),
    ),
  );

  const gain = gross.minus(initialAmount);

  const tax = compose(
    () => new Decimal(track.tax),
    t => t.dividedBy(100),
    t => t.times(gain),
  )();

  return {
    gross,
    initialAmount,
    period,
    tax,
    ...values,
  };
}

export function fixed({
  initialAmount, interest, period, ...values
}) {
  return Object
    .entries(values)
    .reduce((obj, [k, v]) => ({ ...obj, [k]: isDecimal(v) ? v.toDP(2).toNumber() : v }), {});
}

export default action$ => action$.pipe(
  ofType('simulate/input'),
  map(({ payload }) => payload),
  map(prepare),
  map(convert),
  mergeMap(v => of(v).pipe(
    map(validate),
    map(compose(
      amount,
      taxByPeriod,
    )),
    map(fixed),
    map(output),
    catchError(({ violations }) => of(output({
      gross: 0,
      tax: 0,
      violations,
    }))),
  )),
);
