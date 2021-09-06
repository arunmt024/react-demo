import * as constants from './constants'
import Api from '@app/api'
import apiRoute from '@utils';
export function actionStartRequest(){
  console.log('called');
  return{
    type: constants.INIT_REQUEST,
  };
}
export function actionEndRequest(error){
    console.log('called');
    return{
      type: constants.END_REQUEST,
    };
  }

  export function actionGetEmployees(employees){
    console.log('called');
    return{
      type: constants.GET_EMPLOYEES,
      employees,
    };
  }

export function getEmployees(){
    return (dispatch) => {
        dispatch(actionStartRequest())
        return Api.get(apiRoute.apiGetEmployee).then(resp => {
          if(resp.status==='Error'){
            dispatch(actionEndRequest(resp.message))
          }
          else{
          dispatch(actionGetEmployees(resp))

          }
          console.log('--------got the response---------',resp)
        }).catch((ex) => {
            dispatch(actionEndRequest(ex))
          console.log('------errror-------',ex);
          //authFailure(ex,false,false)
        })
    }
  }
