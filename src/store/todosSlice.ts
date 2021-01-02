import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FirebaseUtil from '../config/firebase';
import { AppThunk } from './store';
import { todoConverter, TodoType } from '../models/todo';

// addTodoThunk
// addTodoRequest
// addTodoSuccess
// addTodoFail

// deleteTodoThunk
// deleteTodoRequest
// deleteTodoSuccess
// deleteTodoFail

interface Todo {
  id: string;
  description: string;
}

interface StateType {
  loading: boolean;
  todos: Todo[];
  error: string;
}

const initialState: StateType = {
  loading: false,
  todos: [],
  error: '',
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoRequest: (state, action: PayloadAction) => {
      state.loading = true;
      state.error = '';
    },
    addTodoSuccess: (state, action: PayloadAction<TodoType>) => {
      state.loading = false;
      state.todos.push({
        id: action.payload.id as any,
        ...action.payload,
      });
    },
    addTodoFail: (state, action: PayloadAction<{ error: string }>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    getTodosRequest: (state, action: PayloadAction) => {
      state.loading = true;
    },
    getTodosSucess: (state, action: PayloadAction<{ todos: Todo[] }>) => {
      state.loading = false;
      state.error = '';
      state.todos = action.payload.todos;
    },
    getTodosFail: (state, action: PayloadAction<{ error: string }>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    deleteTodoRequest: (state, action: PayloadAction) => {
      state.loading = true;
    },
    deleteTodoSuccess: (state, action: PayloadAction<{ id: string }>) => {
      state.loading = false;
      state.error = '';
      let index = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos.splice(index, 1);
    },
    deleteTodoFail: (state, action: PayloadAction<{ error: string }>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  actions: {
    addTodoFail,
    addTodoRequest,
    addTodoSuccess,
    deleteTodoFail,
    deleteTodoRequest,
    deleteTodoSuccess,
    getTodosFail,
    getTodosRequest,
    getTodosSucess,
  },
} = slice;

export default slice.reducer;

export const addTodoThunk = ({
  description,
}: {
  description: string;
}): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(addTodoRequest());
    const {
      auth: { id },
    } = getState();
    try {
      const todoRef = await FirebaseUtil.firestore
        .collection('todos')
        .withConverter(todoConverter)
        .add({
          uid: id ?? undefined,
          description,
        });

      const data = (await todoRef.get()).data();
      if (data) {
        dispatch(
          addTodoSuccess({
            id: todoRef.id,
            ...data,
          }),
        );
      } else dispatch(addTodoFail({ error: 'something went wrong' }));
    } catch (e) {
      dispatch(addTodoFail({ error: e.message }));
    }
  };
};

export const getTodosThunk = (): AppThunk => {
  return async (dispatch, getState) => {
    const {
      auth: { id },
    } = getState();
    try {
      const todosRef = await FirebaseUtil.firestore
        .collection('todos')
        .where('uid', '==', id)
        .withConverter(todoConverter)
        .get();
      const fetchedTodos = todosRef.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      dispatch(
        getTodosSucess({
          todos: fetchedTodos,
        }),
      );
    } catch (e) {
      dispatch(
        getTodosFail({
          error: e.message,
        }),
      );
    }
  };
};

export const deleteTodoThunk = ({ id }: { id: string }): AppThunk => {
  return async dispatch => {
    dispatch(deleteTodoRequest());
    try {
      await FirebaseUtil.firestore.collection('todos').doc(id).delete();
      dispatch(deleteTodoSuccess({ id }));
    } catch (e) {
      dispatch(deleteTodoFail({ error: e.message }));
    }
  };
};
