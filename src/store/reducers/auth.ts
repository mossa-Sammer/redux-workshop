import {
  AuthState,
  AuthActionTypes,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_SUCCESS,
  SIGNUP_REQUEST_FAIL,
  LOGOUT_USER,
} from '../types/auth';

const initState: AuthState = {
  loading: false,
  email: null,
  id: null,
  error: null,
};

const reducer = (state = initState, action: AuthActionTypes): AuthState => {
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      id: null,
      email: null,
      loading: false,
      error: '',
    };
  } else if (action.type === LOGIN_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === LOGIN_REQUEST_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      id: action.payload.id,
      email: action.payload.email,
    };
  } else if (action.type === LOGIN_REQUEST_FAIL) {
    return {
      ...state,
      loading: false,
      email: null,
      id: null,
      error: action.payload.error,
    };
  } else if (action.type === SIGNUP_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === SIGNUP_REQUEST_SUCCESS) {
    return {
      ...state,
      loading: false,
      id: action.payload.id,
      email: action.payload.email,
    };
  } else if (action.type === SIGNUP_REQUEST_FAIL) {
    return {
      ...state,
      loading: false,
      id: null,
      email: null,
      error: action.payload.error,
    };
  } else return state;
};

export default reducer;
