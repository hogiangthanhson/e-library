import { AdminLayout } from 'components/Layout';
import { Navigate, RouteProps } from 'react-router-dom';

export function PrivateRoute(props: RouteProps) {
  // Check user logged in
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  return isLoggedIn ? <AdminLayout /> : <Navigate to="/login" />;
}
