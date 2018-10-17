import initialState from './initialState';
import {FETCH_STREAMS, RECEIVE_STREAMS} from '../actions/actionTypes';

export default function streams(state = initialState.streams, action) {
  let newState;
  switch (action.type) {
    case FETCH_STREAMS:
      console.log('FETCH_STREAMS Action')
      return action;
    case RECEIVE_STREAMS:
      newState = action.streams;
      console.log('RECEIVE_STREAMS Action')
      return newState;
    default:
      return state;
  }
}