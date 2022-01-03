import { useAppSelector } from 'app/hooks';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export function PrivateRoute(props: RouteProps) {
  // Check user logged in
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  return isLoggedIn ? <AdminLayout /> : <Navigate to="/login" />;
}
