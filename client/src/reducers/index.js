import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import settingReducer from './settingReducer';
import planReducer from './planReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  setting: settingReducer,
  plan: planReducer
});
