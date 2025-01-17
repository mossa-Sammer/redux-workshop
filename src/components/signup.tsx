import React from 'react';
import useForm from '../hooks/useForm';

const Signup = () => {
  const { form, setForm, resetForm } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <div>
      <h1>Signup here</h1>
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
        <button type="submit">Signup Here</button>
      </form>
    </div>
  );
};

export default Signup;
