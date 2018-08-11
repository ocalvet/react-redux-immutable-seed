import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createState from './initialState';
import createReducers from './reducers/index';
import sagas from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const reducers = createReducers();
  const initialState = createState();
  const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(...sagas);
  return store;
}
