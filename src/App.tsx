import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Nav from './components/nav';
import Todos from './components/todos';
import AuthedRoute from './components/routes/AuthedRoute';
import NoAuthRoute from './components/routes/NoAuthRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <AuthedRoute exact path="/todos">
            <Todos />
          </AuthedRoute>
          <NoAuthRoute exact path="/login">
            <Login />
          </NoAuthRoute>
          <NoAuthRoute exact path="/signup">
            <Signup />
          </NoAuthRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
