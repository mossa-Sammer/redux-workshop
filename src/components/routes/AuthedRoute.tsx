import React from 'react';
import { useSelector } from 'react-redux';

import { RouteProps, Redirect, Route } from 'react-router-dom';

import { RootState } from '../../store/rootReducer';

const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const userId = useSelector((state: RootState) => state.auth.id);
  if (userId) {
    return <Route component={component} {...rest} />;
  } else {
    console.log('go out');
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
