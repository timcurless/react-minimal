import initialState from './initialState';

export default function dummyReducer(state = initialState.nothing, action) {
  switch (action.type) {
    default:
      return state;
  }
}
