import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="todos">Hello {false ? '👨 authed' : 'strange'}</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="#" onClick={() => {}}>
        Logout
      </Link>
    </nav>
  );
};

export default Nav;
