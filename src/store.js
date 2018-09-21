import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

const logger = store => next => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(
    promiseMiddleware(),
    logger,
  ),
);

export default store;
