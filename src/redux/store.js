import { createStore } from 'redux';
import reducers from './reducers';

export default () => {
  console.log('Reducers', reducers);
  const store = createStore(reducers, {
    counter: 0
  });
  return store;
}
