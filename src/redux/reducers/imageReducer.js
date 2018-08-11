import { FETCH_IMAGE, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_ERROR } from '../actions/index';

export default (state = {}, action) => {
  console.log('ACTION', action.type);
  switch(action.type) {
    case FETCH_IMAGE:
      return state.merge({ fetching: true, error: '' });
    case FETCH_IMAGE_SUCCESS:
      return state.merge({ fetching: false, url: action.url });
    case FETCH_IMAGE_ERROR:
      return state.merge({ fetching: false, error: action.error });
    default:
      return state;
  }
};
