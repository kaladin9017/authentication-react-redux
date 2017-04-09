import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  users: usersReducer
});

export default rootReducer;
