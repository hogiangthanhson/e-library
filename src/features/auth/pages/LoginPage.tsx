import React, { useEffect, useState } from 'react';
import bg from 'assets/images/bg_login.png';
import './login.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as User } from 'assets/images/User.svg';
import { ReactComponent as Shield } from 'assets/images/shield.svg';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from 'app/hooks';
import { setUser } from '../userSlice';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        localStorage.setItem('token', user.refreshToken);
        navigate('/');
      })
      .catch(() => alert('invalid user!'));
  };

  return (
    <div className="login">
      <img src={bg} alt="" className="login-img" />
      <Logo className="login-logo" />
      <div className="login-form">
        <h1>Đăng nhập</h1>
        <form>
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <section>
              <User className="form-icon" />
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
            </section>
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <section>
              <Shield className="form-icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </section>
          </div>
          <Link to="/forgotPassword" className="form-link">
            Quên mật khẩu?
          </Link>
          <button onClick={handleLogin} className="btn btn-primary">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
