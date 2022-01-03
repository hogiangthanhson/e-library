import './HomePage.scss';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import WEB23 from 'assets/images/WEB23.png';
import Word from 'assets/images/word.png';
import Ppt from 'assets//images/ppt.png';
import Xlxs from 'assets//images/xlxs.png';

const options = ['2020-2021', '2019-2020', '2018-2019'];

const listSubject = [
  {
    name: 'Website Design',
    des: 'Web Design',
    code: 'WEB23',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Kỹ năng mềm',
    des: 'Web Design',
    code: 'KNM13',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Toán đại số',
    des: 'Web Design',
    code: 'MBA13',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Kiểm toán',
    des: 'Web Design',
    code: 'DLK4',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Code',
    des: 'Web Design',
    code: 'THZ102',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Sinh học',
    des: 'Web Design',
    code: 'SLGG22',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Thương mại điện tử',
    des: 'Web Design',
    code: 'VH112',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Lịch sử',
    des: 'Web Design',
    code: 'MTLS12',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Basic Design',
    des: 'Web Design',
    code: 'DES23',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Sample11',
    des: 'Web Design',
    code: 'SP11',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Application',
    des: 'Web Design',
    code: 'APP5',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Toán cao cấp',
    des: 'Web Design',
    code: 'TCC4',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'C++',
    des: 'Web Design',
    code: 'C21',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
  {
    name: 'Gene',
    des: 'Web Design',
    code: 'GEN5',
    classes: '5',
    teacher: 'Hoa Hoa',
    image: `${WEB23}`,
  },
];

const listFile = [
  {
    name: 'Thương mại điện tử là gì.docx',
    datetime: '12:01 12/12/2020',
    subject: 'Thương mại điện tử',
    teacher: 'Hoa Hoa',
    image: `${Word}`,
  },
  {
    name: 'Lịch sử mỹ thuật từ thế kỉ V.ppt',
    datetime: '12:01 12/12/2020',
    subject: 'Lịch sử mỹ thuật',
    teacher: 'Hoa Hoa',
    image: `${Ppt}`,
  },
  {
    name: 'Danh sách ôn tập.xlsx',
    datetime: '12:01 10/11/2020',
    subject: 'Ngữ văn',
    teacher: 'Hoa Hoa',
    image: `${Xlxs}`,
  },
  {
    name: 'Bài giảng toán tiết 1.mp3',
    datetime: '12:01 12/12/2020',
    subject: 'Toán đại số',
    teacher: 'Hoa Hoa',
  },
];

export const HomePage = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [page, setPage] = useState(0);
  const [file, setFile] = useState(0);

  const nextPage = () => {
    setPage(page + 8);
  };

  const previousPage = () => {
    setPage(page - 8);
  };

  const disable = () => {
    return;
  };

  const subPerPage = listSubject.slice(page, page + 8);

  const nextFile = () => {
    setFile(file + 3);
  };

  const previousFile = () => {
    setFile(file - 3);
  };

  const filePerPage = listFile.slice(file, file + 3);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className='container'>
      <h1>Trang chủ</h1>
      <div className="row">
        <div id="nienkhoa" className="col-sm-3" style={{ paddingLeft: '0px', height: '90px' }}>
          <React.Fragment>
            <label style={{ marginRight: '20px' }}>Niên khoá</label>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
              <Button className="year" onClick={handleClick}>
                {options[selectedIndex]}
              </Button>
              <Button
                className="down"
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              style={{ zIndex: '99999999' }}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu">
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </React.Fragment>
        </div>
        <div className="col-sm-9" style={{ paddingRight: '0px' }}>
          <div style={{ flexWrap: 'nowrap', display: 'flex' }}>
            <div id="sub" className="card" style={{ width: '22%' }}>
              <h1>12</h1>
              <p>Môn học</p>
            </div>

            <div id="teacher" className="card" style={{ width: '22%', marginLeft: '4%' }}>
              <h1>33</h1>
              <p>Giảng viên</p>
            </div>

            <div id="file" className="card" style={{ width: '22%', marginLeft: '4%' }}>
              <h1>13</h1>
              <p>Tệp riêng tư</p>
            </div>

            <div id="exam" className="card" style={{ width: '22%', marginLeft: '4%' }}>
              <h1>132</h1>
              <p>Đề thi</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '50px' }}>
        <div className="row" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
          <div
            className="row"
            style={{
              paddingRight: '0px',
              color: '#CC5C00',
              paddingLeft: '0px',
            }}
          >
            <div className="col-sm-10" style={{ paddingLeft: '0px', marginBottom: '10px' }}>
              <p>
                <b>Tài liệu môn học đã xem gần đây</b>
              </p>
            </div>
            <div
              className="col-sm-2"
              style={{
                paddingRight: '0px',
                display: 'block',
                textAlign: 'right',
              }}
            >
              <button
                className={page > 0 ? 'backnext' : 'disable'}
                onClick={page > 0 ? previousPage : disable}
                disabled={page > 0 ? false : true}
              >
                <NavigateBeforeIcon />
              </button>
              <button
                className={page < subPerPage.length - 1 ? 'backnext' : 'disable'}
                onClick={page < subPerPage.length - 1 ? nextPage : disable}
                disabled={page < subPerPage.length - 1 ? false : true}
              >
                <NavigateNextIcon />
              </button>
            </div>
          </div>
          {subPerPage.map((value, index) => (
            <div className="col-sm-3" key={index} style={{ marginBottom: '20px' }}>
              <div id="tailieu" className="card">
                <div className="row">
                  <div className="col-sm-5" id="playSub">
                    <button style={{ backgroundImage: `url(${value.image})` }} className="playSub">
                      <PlayCircleIcon />
                    </button>
                  </div>
                  <div className="col-sm-7" id="contentSub">
                    <h6>{value.name}</h6>
                    <p>{value.des}</p>
                    <p style={{ color: '#CC5C00', marginBottom: '0px' }}>{value.code}</p>
                    <p style={{ marginBottom: '0px', marginTop: '0px' }}>Giảng viên: {value.teacher}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: '40px' }}>
        <div className="row" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
          <div className="col-sm-3">
            <div className="card" id="cardCover">
              <h6 style={{ margin: '20px' }}>
                <b>Thống kê truy cập</b>
              </h6>
              <div className="card" id="cardInside">
                <div className="row">
                  <div className="col-sm-8">
                    <p>Đang truy cập:</p>
                    <p>Lượt truy cập hôm nay:</p>
                    <p>Lượt truy cập tuần này:</p>
                    <p>Lượt truy cập tháng này:</p>
                    <p>Tổng lượt truy cập:</p>
                  </div>
                  <div className="col-sm-4">
                    <p style={{ color: '#CC5C00' }}>
                      <b>31</b>
                    </p>
                    <p style={{ color: '#CC5C00' }}>
                      <b>97</b>
                    </p>
                    <p style={{ color: '#CC5C00' }}>
                      <b>1,298</b>
                    </p>
                    <p style={{ color: '#CC5C00' }}>
                      <b>31</b>
                    </p>
                    <p style={{ color: '#CC5C00' }}>
                      <b>31</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div
              className="row"
              style={{
                paddingRight: '0px',
                color: '#CC5C00',
                paddingLeft: '0px',
              }}
            >
              <div className="col-sm-10" style={{ paddingLeft: '0px', marginBottom: '10px' }}>
                <p>
                  <b>Tệp tải lên gần đây</b>
                </p>
              </div>
              <div
                className="col-sm-2"
                style={{
                  paddingRight: '0px',
                  display: 'block',
                  textAlign: 'right',
                }}
              >
                <button
                  className={file > 0 ? 'backnext' : 'disable'}
                  onClick={file > 0 ? previousFile : disable}
                  disabled={file > 0 ? false : true}
                >
                  <NavigateBeforeIcon />
                </button>
                <button
                  className={file < filePerPage.length - 1 ? 'backnext' : 'disable'}
                  onClick={file < filePerPage.length - 1 ? nextFile : disable}
                  disabled={file < filePerPage.length - 1 ? false : true}
                >
                  <NavigateNextIcon />
                </button>
              </div>
            </div>
            <div className="row" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
              {filePerPage.map((value, index) => (
                <div className="col-sm-4" key={index} style={{ marginBottom: '20px' }}>
                  <div id="tailieu" className="card">
                    <div className="row">
                      <div className="col-sm-5" id="imgFile">
                        <img height={'40%'} src={value.image} alt={value.name} />
                      </div>
                      <div className="col-sm-7" id="contentSub">
                        <h6>{value.name}</h6>
                        <p style={{ color: '#373839', fontSize: '14px' }}>{value.datetime}</p>
                        <p style={{ marginBottom: '0px', color: '#CC5C00' }}>{value.subject}</p>
                        <p
                          style={{
                            marginTop: '0px',
                            marginBottom: '0px',
                          }}
                        >
                          Giảng viên: {value.teacher}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontStyle: 'italic',
                color: 'gray',
                fontSize: '16px',
                marginLeft: '12px',
              }}
            >
              Hiện thị 10 tệp tài liệu đã xem gần đây nhất
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
