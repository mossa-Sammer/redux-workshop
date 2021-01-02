import { combineReducers } from '@reduxjs/toolkit';
import auth from './reducers/auth';
import todos from './todosSlice';
const rootReducer = combineReducers({ auth, todos });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
