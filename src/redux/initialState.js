import Immutable from 'seamless-immutable';

export default () => {
  return Immutable({
    counter: 0,
    image: {
      fetching: false,
      error: '',
    },
  });
}