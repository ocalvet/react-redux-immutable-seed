import { INCREMENT } from './actions';

export default (state, action) => {
  console.log('Store called', action);
  switch(action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};
