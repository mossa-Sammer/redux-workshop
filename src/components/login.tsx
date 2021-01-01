import React from 'react';
import useForm from '../hooks/useForm';

const Login = () => {
  const { form, setForm } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login here</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="type your email"
          value={form.email}
          onChange={setForm}
        />
        <input
          name="password"
          type="password"
          placeholder="type your password"
          value={form.password}
          onChange={setForm}
        />
        <button type="submit">Login Here</button>
      </form>
    </div>
  );
};

export default Login;
