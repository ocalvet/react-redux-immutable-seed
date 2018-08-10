import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import counterReducer from './counterReducer';

export default () => {
  return combineReducers({
    image: imageReducer,
    counter: counterReducer,
  });
};
