import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoThunk } from '../store/todosSlice';

const TodoItem: React.FC<{ id: string }> = ({ id, children }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      😊😊😊 {children}
      <button
        onClick={() => {
          dispatch(
            deleteTodoThunk({
              id,
            }),
          );
        }}
        className="delete-todo-btn"
      >
        💩
      </button>
    </div>
  );
};

export default TodoItem;
