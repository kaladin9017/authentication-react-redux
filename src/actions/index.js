import axios from 'axios';
import { browserHistory } from 'react-router';
const localStorage = require('localStorage');

import { AUTH_USER,  UNAUTH_USER, AUTH_ERROR } from './types';
const ROOT_URL = 'http://localhost:3000/';

/*
  Submit Email and Password
  If request is good update state to indicate user is authenticated
  save JWT token on client/user & redirect user to protected resource
  Else Show user error
*/
export function signinUser({ email, password }) {
  /*
    This functio gives reduxThunk direct access to function
    Allows us access to asyn logic
    IF user login information is correct dispatch authenticated
    save token to localstorage
  */
  return function(dispatch) {
    axios.post(`${ROOT_URL}signin`, { email, password })
      .then((response) => {
        console.log(response)
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
        dispatch({ type: AUTH_USER });
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  }
}

/*
  Submit Email and Password Sign UP
  If request is good update state to indicate user is authenticated
  save JWT token on client/user & redirect user to protected resource
  Else Show user error
*/
export function signupUser({ email, password }) {
  /*
    This functio gives reduxThunk direct access to function
    Allows us access to asyn logic
    IF user login information is correct dispatch authenticated
    save token to localstorage
  */
  return function(dispatch) {
    axios.post(`${ROOT_URL}signup`, { email, password })
      .then((response) => {
        console.log(response)
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
        dispatch({ type: AUTH_USER });
      })
      .catch((response) => {
        console.log(response)
        dispatch(authError("Email in use"));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  };
}

export function getSecret() {
  return function (dispatch) {
    axios.get(ROOT_URL,
      {
        headers:
        { authorization: localStorage.getItem('token') }})
      .then(response => console.log(response))
  };
}
