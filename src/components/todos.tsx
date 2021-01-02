import React from 'react';
import useForm from '../hooks/useForm';
import TodoItem from './todoItem';

const Todos = () => {
  const { form, resetForm, setForm } = useForm({
    description: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // firebase call
    // handle errors
    // filter
    // dipatch
    resetForm();
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
        <TodoItem>
          Hello there my todo is added now Hello there my todo is added now
          Hello there my todo is added now Hello there my todo is added now
          Hello there my todo is added now
        </TodoItem>
        <TodoItem>Hello there my todo is added now</TodoItem>
        <TodoItem>Hello there my todo is added now</TodoItem>
        <TodoItem>Hello there my todo is added now</TodoItem>
        <TodoItem>Hello there my todo is added now</TodoItem>
        <TodoItem>Hello there my todo is added now</TodoItem>
      </div>
    </div>
  );
};

export default Todos;
