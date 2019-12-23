/* eslint-disable no-console */

import { catchError } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';

import simulate from './simulate/simulate.epic';

export default (action$, store$, dependencies) => combineEpics(
  simulate,
)(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    console.error(error);
    return source;
  }),
);
