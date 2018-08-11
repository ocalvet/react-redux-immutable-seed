import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import imageReducer from './imageReducer';
import counterReducer from './counterReducer';

export default () => {
  return combineReducers({
    image: imageReducer,
    counter: counterReducer,
    routing: routerReducer
  });
};
