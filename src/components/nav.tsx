import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { logoutThunk } from '../store/actions/auth';

const Nav = () => {
  const dispatch = useDispatch();
  const { loading, id } = useSelector((state: RootState) => state.auth);
  return (
    <nav className="nav">
      <Link to="todos">Hello {!loading && id ? '👨 authed' : 'strange'}</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link
        to="#"
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Logout
      </Link>
    </nav>
  );
};

export default Nav;
