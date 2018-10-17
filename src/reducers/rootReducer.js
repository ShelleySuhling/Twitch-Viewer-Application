import {combineReducers} from 'redux';
import streams from './streamsReducer';

const rootReducer = combineReducers({
  streams
});

export default rootReducer;