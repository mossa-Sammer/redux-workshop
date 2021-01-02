import React from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../hooks/useForm';
import { LoginThunk } from '../store/actions/auth';

const Login = () => {
  const { form, setForm } = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(LoginThunk({ email: form.email, password: form.password }));

    // firebase call
    // handle errors
    // filter
    // dipatch
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
