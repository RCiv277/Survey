import tokenService from './tokenService';

const BASE_URL = '/api/survey/';

export default {
  index,
  create,
  indexUser,
  details
};

function index() {
  // return [{ name : 'Hiya'}]
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function indexUser() {
  // return [{ name : 'Hiya'}]
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL + 'user', options).then(res => res.json());
}

function create(form) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(form)
  };
  return fetch(BASE_URL + 'create', options).then(res => res.json());
}

function details(){
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}