import { ReactComponent as User } from 'assets/images/user_circle.svg';
import { useAppDispatch } from 'app/hooks';
import { Link } from 'react-router-dom';
import { removeUser } from 'features/auth/userSlice';
import './TopBar.scss';

export function TopBar() {
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <div className="topbar">
        <div className="account">
          <Link to='profile' className="left">
            <User />
            <div className="account-name menu">Admin</div>
          </Link>
          <div className="right">
            <Link
              to="/login"
              className="content"
              onClick={() => {
                dispatch(removeUser());
                localStorage.removeItem('token');
              }}
            >
              Đăng xuất
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}