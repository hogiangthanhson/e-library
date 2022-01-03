import React from 'react';
import { Link } from 'react-router-dom';
import "./login.scss"
import bg from 'assets/images/bg_login.png';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as User } from 'assets/images/User.svg';
import { ReactComponent as Arrow } from 'assets/images/arrow.svg';

export default function ForgotPassword() {
  return (
    <div className="login">
      <img src={bg} alt="" className="login-img" />
      <Logo className="login-logo" />
      <div className="login-form">
        <h1>Cấp lại mật khẩu</h1>
        <form>
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <section>
              <User className='form-icon'/>
              <input type="text" className="form-control" />
            </section>
          </div>
          <div className="form-group">
            <label>Mã xác thực</label>
            <section>
              <input type="text" className="form-control form-control--auth"/>
            </section>
          </div>
          <Link to="/login" className='form-link'>
            <Arrow />
            <p>Quay lại trang chủ</p>
          </Link>
          <button type="submit" className="btn  btn-primary btn-primary--disable">
            Cấp lại mật khẩu
          </button>
        </form>
      </div>
    </div>
  );
}
