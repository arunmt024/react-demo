import apiRoute from '@utils';
class Api {
    static headers() {
      return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'token':token,
        'dataType': 'json',
      }
    }
  
    static get(route) {
      return this.boilerPlateExplorer(route, null,'GET');
    }
  
    static put(route, params) {
      return this.boilerPlateExplorer(route, params, 'PUT')
    }
  
    static post(route, params) {
      return this.boilerPlateExplorer(route, params,'POST')
    }
    static postWithToken(route, params,token) {
      return this.boilerPlateExplorer(route, params,token, 'POST',)
    }
  
    static delete(route, params) {
      return this.boilerPlateExplorer(route, params, 'DELETE')
    }
  
    static boilerPlateExplorer(route, params,verb) {
      const host = apiRoute.hostUrl
      const url = `${host}${route}`
      console.log(url)
      let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
      //options.headers = Api.headers(token)  if you want authorised token
        options.headers = Api.headers()
      return fetch(url, options).then( resp => {
        let json = resp.json();
        if (resp.ok) {
          return json;
        }
        return json.then(err => {throw err});
  
      }).then( json => json);
    }
  }
  export default Api