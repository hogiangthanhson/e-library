import React, { useState } from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as Home } from 'assets/images/home-icon.svg';
import { ReactComponent as Book } from 'assets/images/book-icon.svg';
import { ReactComponent as File } from 'assets/images/file-lock-icon.svg';
import { ReactComponent as Bag } from 'assets/images/bag-icon.svg';
import { ReactComponent as Bell } from 'assets/images/bell-icon.svg';
import { ReactComponent as Setting } from 'assets/images/setting-icon.svg';
import { ReactComponent as Question } from 'assets/images/question-icon.svg';

import './navigation.scss';
import { NavLink } from 'react-router-dom';

interface LeaderProps {}

export function Navigation(props: LeaderProps) {
  const [dropMenu, setdropMenu] = useState(false);
  const drop = () => {
    setdropMenu(!dropMenu);
  };

  const listIcon = [
    {
      to: 'home',
      src: <Home />,
    },
    {
      to: 'subjectmanagement/subject-list',
      src: <Book />,
    },
    {
      to: 'privatefile/all-private-file',
      src: <File />,
    },
    {
      to: 'exambank',
      src: <Bag />,
    },
    {
      to: 'notify',
      src: <Bell />,
    },
    {
      to: 'system',
      src: <Setting />,
    },
    {
      to: 'support',
      src: <Question />,
    },
  ];

  return (
    <div className="nav__bar">
      <div className="nav__bar_need">
        <Logo className="img_nav" />
        <ul className="list__item">
          {listIcon.map((o, i) => (
            <NavLink to={o.to} key={i} onClick={drop}>
              {o.src}
            </NavLink>
          ))}
        </ul>
        <div className="menu">
          <ul className="menu__list">
            <NavLink to="home" className="menu__item">
              <Home className="menu__item-icon" />
              <span>Trang chủ</span>
            </NavLink>
            <li>
              <NavLink to="subjectmanagement/subject-list" className="menu__item mb-28">
                <Book className="menu__item-icon" />
                <span>Quản lý môn học</span>
              </NavLink>
              <section className="menu_drop" id={dropMenu ? 'menu_drop_true' : 'menu_drop_false'}>
                <NavLink to="subjectmanagement/subject-list" className="menu__drop-item content">
                  Danh sách môn học
                </NavLink>
                <NavLink to="subjectmanagement/document-approval" className="menu__drop-item content">
                  Phê duyệt tài liệu môn học
                </NavLink>
              </section>
            </li>
            <NavLink className="menu__item" to="privatefile/all-private-file">
              <File className="menu__item-icon" />
              <span>Tệp riêng tư</span>
            </NavLink>
            <NavLink className="menu__item" to="exambank">
              <Bag className="menu__item-icon" />
              <span>Ngân hàng đề thi</span>
            </NavLink>
            <NavLink className="menu__item" to="notify">
              <Bell className="menu__item-icon" />
              <span>Thông báo</span>
            </NavLink>
            <NavLink className="menu__item" to="system">
              <Setting className="menu__item-icon" />
              <span>Cài đặt hệ thống</span>
            </NavLink>
            <NavLink className="menu__item" to="support">
              <Question className="menu__item-icon" />
              <span>Trợ giúp</span>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
