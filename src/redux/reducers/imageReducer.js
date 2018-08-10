import { FETCH_IMAGE } from '../actions/index';

export default (state = {}, action) => {
  console.log('ACTION', action.type);
  switch(action.type) {
    case FETCH_IMAGE:
      return state.merge({ fetching: true });
    default:
      return state;
  }
};
