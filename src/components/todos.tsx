import React, { useEffect } from 'react';
import useForm from '../hooks/useForm';
import TodoItem from './todoItem';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoThunk, getTodosThunk } from '../store/todosSlice';
import { RootState } from '../store/rootReducer';
const Todos = () => {
  const dispatch = useDispatch();
  const todosArr = useSelector((state: RootState) => state.todos.todos);
  const { form, resetForm, setForm } = useForm({
    description: '',
  });

  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTodoThunk({
        description: form.description,
      }),
    );
    resetForm();
    // firebase call
    // handle errors
    // filter
    // dipatch
  };

  return (
    <div>
      <h1>My Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            padding: '0.25rem 1rem',
            width: '40%',
            height: '22px',
          }}
          name="description"
          placeholder="type your description for the todo"
          value={form.description}
          onChange={setForm}
        />
        <button type="submit">+ Add Todo</button>
      </form>
      <div className="todos-wrapper">
        {todosArr &&
          todosArr.map(todo => (
            <TodoItem id={todo.id}>{todo.description}</TodoItem>
          ))}
      </div>
    </div>
  );
};

export default Todos;
