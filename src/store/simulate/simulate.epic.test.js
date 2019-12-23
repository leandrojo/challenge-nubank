/* eslint-env jest */

import { TestScheduler } from 'rxjs/testing';
import { isDecimal } from 'decimal.js';

import { compose } from 'common';

import { input, output } from './simulate.actions';
import simulate, {
  prepare, convert, validate, EntriesException, amount, fixed, taxByPeriod,
} from './simulate.epic';

describe('Prepare', () => {
  const expected = { initialAmount: 1000.00, interest: 0.5, period: 60 };

  it('should normalize keys in entry object', () => {
    const entry = { 'initial-amount': 1000.00, interest: 0.5, period: 60 };

    expect(prepare(entry)).toStrictEqual(expected);
  });

  it('should keep keys when it\'s correct', () => {
    const entry = expected;

    expect(prepare(entry)).toStrictEqual(expected);
  });
});

describe('Convert', () => {
  it('should convert float number type for Decimal', () => {
    const entry = { initialAmount: 1000.00, interest: 0.5, period: 60 };

    const { initialAmount, interest, period } = convert(entry);

    expect(isDecimal(initialAmount)).toBe(true);
    expect(isDecimal(interest)).toBe(true);
    expect(isDecimal(period)).toBe(true);
  });
});

describe('Validate', () => {
  it('should valid if numbers is negative', () => {
    const entry = convert({ initialAmount: -1000.00, interest: -0.5, period: -60 });

    expect(() => validate(entry)).toThrowError(EntriesException);
  });

  it('should valid if numbers is positive', () => {
    const entry = convert({ initialAmount: 1000.00, interest: 0.5, period: 60 });

    const { violations } = validate(entry);

    expect(violations.length).toBe(0);
  });
});

describe('Amount', () => {
  const entry = convert({ initialAmount: 1000.00, interest: 0.5, period: 60 });

  const { gross } = amount(entry);

  it('should return like Decimal', () => {
    expect(isDecimal(gross)).toBe(true);
  });

  it('should return a gross value', () => {
    expect(gross.toFixed(5)).toBe('1348.85015');
  });
});

describe('Tax by Period', () => {
  it('should return a tax value equivality to a period', () => {
    const entry = {
      initialAmount: 1000, gross: 1348.85, interest: 0.5, period: 60,
    };

    expect(compose(
      convert,
      taxByPeriod,
      ({ tax }) => tax.toFixed(5),
    )(entry)).toBe('52.32750');
  });
});

describe('Fixed', () => {
  it('should to revert Decimal for a basic string', () => {
    const entry = {
      gross: 8765.432, interest: 0.5, period: 60, tax: -123.456, violations: [],
    };

    const expected = {
      gross: 8765.43, tax: -123.46, violations: [],
    };

    expect(compose(
      convert,
      fixed,
    )(entry)).toStrictEqual(expected);
  });
});

describe('Simulate', () => {
  it('success with initial state', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(expected).toEqual(actual);
    });

    testScheduler.run((helpers) => {
      const { expectObservable, hot } = helpers;

      const action$ = hot('-a', {
        a: input({ 'initial-amount': 1000.00, interest: 0.5, period: 60 }),
      });

      const output$ = simulate(action$);

      expectObservable(output$).toBe('-a', {
        a: output({
          gross: 1348.85,
          tax: 52.33,
          violations: [],
        }),
      });
    });
  });

  it('success with change values', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    testScheduler.run(({ expectObservable, hot }) => {
      const action$ = hot('-a', {
        a: input({ 'initial-amount': 1000.00, interest: 0.5, period: 12 }),
      });

      const output$ = simulate(action$, null);

      expectObservable(output$).toBe('-a', {
        a: output({
          gross: 1061.68,
          tax: 12.34,
          violations: [],
        }),
      });
    });
  });

  it('succeed when entries are not valid, but violations are returned', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(expected).toEqual(actual);
    });

    testScheduler.run(({ expectObservable, hot }) => {
      const action$ = hot('-a', {
        a: input({ 'initial-amount': -50, interest: -1, period: -6 }),
      });

      const output$ = simulate(action$, null);

      expectObservable(output$).toBe('-a', {
        a: output({
          gross: 0,
          tax: 0,
          violations: ['invalid-initial-amount', 'invalid-interest', 'invalid-period'],
        }),
      });
    });
  });
});
