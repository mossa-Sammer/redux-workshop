// action types
export const LOGOUT_USER = 'LOGOUT_USER';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAIL = 'LOGIN_REQUEST_FAIL';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_REQUEST_SUCCESS = 'SIGNUP_REQUEST_SUCCESS';
export const SIGNUP_REQUEST_FAIL = 'SIGNUP_REQUEST_FAIL';

// login action creators types

interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_REQUEST_SUCCESS;
  payload: {
    id: string;
    email: string;
  };
}

interface LoginFailAction {
  type: typeof LOGIN_REQUEST_FAIL;
  payload: {
    error: string;
  };
}

// signup action creators types

interface SignupRequestAction {
  type: typeof SIGNUP_REQUEST;
}

interface SignupSuccessAction {
  type: typeof SIGNUP_REQUEST_SUCCESS;
  payload: {
    id: string;
    email: string;
  };
}

interface SignupFailAction {
  type: typeof SIGNUP_REQUEST_FAIL;
  payload: {
    error: string;
  };
}

export interface AuthState {
  loading: boolean;
  id: string | null;
  email: string | null;
  error: string | null;
}

export type AuthActionTypes =
  | LogoutUserAction
  | LoginSuccessAction
  | LoginFailAction
  | SignupRequestAction
  | SignupSuccessAction
  | LoginRequestAction
  | SignupFailAction;
