import { createStore } from 'redux';
import createState from './initialState';
import createReducers from './reducers/index';

export default () => {
  const reducers = createReducers();
  const initialState = createState();
  console.log('| REDUCERS |', reducers, initialState);
  const store = createStore(reducers, initialState);
  return store;
}
