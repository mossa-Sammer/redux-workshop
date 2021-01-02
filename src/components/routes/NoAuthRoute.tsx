import React from 'react';
import { useSelector } from 'react-redux';

import { RouteProps, Redirect, Route } from 'react-router-dom';

import { RootState } from '../../store/rootReducer';

const NoAuthRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const userId = useSelector((state: RootState) => state.auth.id);
  if (userId) {
    return <Redirect to="/" />;
  } else return <Route component={component} {...rest} />;
};

export default NoAuthRoute;
