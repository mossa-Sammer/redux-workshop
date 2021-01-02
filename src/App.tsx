import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Nav from './components/nav';
import Todos from './components/todos';
import AuthedRoute from './components/routes/AuthedRoute';
import NoAuthRoute from './components/routes/NoAuthRoute';
import { useDispatch } from 'react-redux';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <AuthedRoute exact path="/todos">
          <Todos />
        </AuthedRoute>
        <NoAuthRoute exact path="/login">
          <Login />
        </NoAuthRoute>
        <NoAuthRoute exact path="/signup">
          <Signup />
        </NoAuthRoute>
      </BrowserRouter>
    </div>
  );
}

export default App;
