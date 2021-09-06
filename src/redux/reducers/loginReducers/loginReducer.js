import createReducer from '@app/createReducer';
import * as constants from '@actions/loginActions/constants';

const intialState = {
  isLoading:false,
  employees:[],
  error:null
};
export const loginReducer = createReducer(intialState, {
  [constants.INIT_REQUEST](state) {
    return Object.assign({}, state, {
      isLoading:true
    });
  },

  [constants.END_REQUEST](state) {
    return Object.assign({}, state, {
      isLoading:false
    });
  },

  [constants.GET_EMPLOYEES](state,action) {
    return Object.assign({}, state, {
      employees:action.employees,
      isLoading:false
    });
  },
});
