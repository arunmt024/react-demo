import { combineReducers } from 'redux';
import * as loginReducer from './loginReducers/loginReducer';

const appReducer = combineReducers(Object.assign({},
  loginReducer));
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
