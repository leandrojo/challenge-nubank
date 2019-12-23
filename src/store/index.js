/* global window */

import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import epics from './epics';
import reducers from './reducers';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );

  epicMiddleware.run(epics);

  return store;
}
