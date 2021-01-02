import {
  AuthActionTypes,
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_USER,
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_SUCCESS,
  SIGNUP_REQUEST_FAIL,
} from '../types/auth';

import { AppThunk } from '../store';
import firebaseUtil from '../../config/firebase';
import handleAuthErrs from '../../utils/handleAuthErrs';

export const loginRequest = (): AuthActionTypes => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = ({
  id,
  email,
}: {
  id: string;
  email: string;
}): AuthActionTypes => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload: {
      id,
      email,
    },
  };
};

export const loginFail = (error: string): AuthActionTypes => {
  return {
    type: LOGIN_REQUEST_FAIL,
    payload: {
      error,
    },
  };
};

export const logoutUser = (): AuthActionTypes => {
  return {
    type: LOGOUT_USER,
  };
};

export const signupRequest = (): AuthActionTypes => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signupSuccess = ({
  id,
  email,
}: {
  id: string;
  email: string;
}): AuthActionTypes => {
  return {
    type: SIGNUP_REQUEST_SUCCESS,
    payload: {
      id,
      email,
    },
  };
};

export const signupFail = (error: string): AuthActionTypes => {
  return {
    type: SIGNUP_REQUEST_FAIL,
    payload: {
      error,
    },
  };
};

export const signupThunk = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): AppThunk => {
  return async dispatch => {
    try {
      dispatch(signupRequest());
      const { user } = await firebaseUtil.signUp(email, password);
      if (user) {
        firebaseUtil.firestore.collection('users').doc(user.uid).set({
          email,
        });
        dispatch(signupSuccess({ email, id: user.uid }));
      } else dispatch(signupFail('something went wrong'));
    } catch (e) {
      console.log(e);
      const err = handleAuthErrs(e.code);
      dispatch(signupFail(err));
    }
  };
};

// to do in workshop
// loginThunk
// logoutThunk
// verfiyAuthThunk
