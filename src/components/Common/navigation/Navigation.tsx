import React, { useState } from 'react';
import './navigation.scss';
import { ReactComponent as Logo } from 'assets/images/logo-white.svg';
import { ReactComponent as Home } from 'assets/images/home-icon.svg';
import { ReactComponent as Book } from 'assets/images/book-icon.svg';
import { ReactComponent as File } from 'assets/images/file-lock-icon.svg';
import { ReactComponent as Bag } from 'assets/images/bag-icon.svg';
import { ReactComponent as Bell } from 'assets/images/bell-icon.svg';
import { ReactComponent as Setting } from 'assets/images/setting-icon.svg';
import { ReactComponent as Question } from 'assets/images/question-icon.svg';
import { Link, NavLink } from 'react-router-dom';

export function Navigation() {
  const [nav, setNav] = useState(false);

  const showNav = () => setNav(!nav);

  return (
    <>
      <nav className={nav ? 'nav active' : 'nav'} onMouseOver={showNav} onMouseOut={showNav}>
        <div className="nav-bar">
          <Logo className="nav-bar-logo" />
          <ul>
            <li onClick={(e) => e.currentTarget.classList.toggle('active')}>
              <NavLink to="/">
                <Home className="nav-bar-icon" />
              </NavLink>
            </li>

            <li>
              <NavLink to="subjectmanagement">
                <Book className="nav-bar-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="privatefile">
                <File className="nav-bar-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="exambank">
                <Bag className="nav-bar-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="notify">
                <Bell className="nav-bar-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="system">
                <Setting className="nav-bar-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="support">
                <Question className="nav-bar-icon" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="home">
                <Home className="nav-bar-icon" />
                <span className="sub-header">Trang chủ</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
