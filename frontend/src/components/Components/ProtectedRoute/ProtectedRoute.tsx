import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../../store/hook';

const ProtectedRoute: React.FC<RouteProps> = ({ element }) => {
  const { isLoggedIn } = useAppSelector(({ user }) => user);

  return isLoggedIn ? (
    <>{element}</>
  ) : (
    <Navigate to="/sign-in" replace />
  );
};

export default ProtectedRoute;