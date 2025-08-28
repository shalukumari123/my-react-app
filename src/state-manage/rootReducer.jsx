import { combineReducers } from '@reduxjs/toolkit';
import couterReducer from '../state-manage/CounterSlice';
import authReducer from '../state-manage/AuthSlice'


// Combine multiple feature reducers into one root reducer
const rootReducer = combineReducers({
  counter: couterReducer,
  auth: authReducer
});

export default rootReducer;
