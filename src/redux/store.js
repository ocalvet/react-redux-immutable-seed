import { createStore } from 'redux';
import createState from './initialState';
import reducers from './reducers';

export default () => {
  console.log('Reducers', reducers);
  const store = createStore(reducers, createState());
  return store;
}
