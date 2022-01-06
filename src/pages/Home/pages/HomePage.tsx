import './HomePage.scss';
import { ReactComponent as Play } from 'assets/images/play_video.svg';
import { ReactComponent as Arrow } from 'assets/images/arrow.svg';
import { ReactComponent as ArrowRight } from 'assets/images/arrow_right.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NienKhoa } from 'components/Common';

const listSubject = [
  {
    name: 'Phát triển Website',
    des: 'Web Design',
    nameId: 'WEB23',
    teacher: 'Hoa Hoa',
    image: require('../../../assets/images/WEB23.jpg'),
  },
  {
    name: 'Kỹ năng mềm',
    des: 'Kỹ năng mềm',
    nameId: 'KNM13',
    teacher: 'ABC',
    image: require('../../../assets/images/KNM13.jpg'),
  },
  {
    name: 'Phát triển Mobile App',
    des: 'Mobile App Design',
    nameId: 'MBA13',
    teacher: 'XYZ',
    image: require('../../../assets/images/MBA13.jpg'),
  },
  {
    name: 'Phương trình bậc 3',
    des: 'Toán Đại Số',
    nameId: 'DLK4',
    teacher: 'Phạm Văn C',
    image: require('../../../assets/images/DLK4.jpg'),
  },
  {
    name: 'Làm quen với Tin học',
    des: 'Web Design',
    nameId: 'THZ102',
    teacher: 'Hoa Hoa',
    image: require('../../../assets/images/THZ102.jpg'),
  },
  {
    name: 'Gene trội Gene lặn',
    des: 'Sinh học',
    nameId: 'SLGG22',
    teacher: 'Hoa Hoa',
    image: require('../../../assets/images/SLGG22.jpg'),
  },
  {
    name: 'Người lái đò sông đà',
    des: 'Web Design',
    nameId: 'VH112',
    teacher: 'Hoa Hoa',
    image: require('../../../assets/images/VH112.jpg'),
  },
  {
    name: 'Lịch sử Mỹ thuật hiện địa',
    des: 'Lịch sử',
    nameId: 'MTLS12',
    teacher: 'Ms. Yến',
    image: require('../../../assets/images/MTLS12.jpg'),
  },
  {
    name: 'Phát triển Website',
    des: 'Web Design',
    nameId: 'WEB23',
    teacher: 'Hoa Hoa',
    image: require('../../../assets/images/WEB23.jpg'),
  },
  {
    name: 'Kỹ năng mềm',
    des: 'Kỹ năng mềm',
    nameId: 'KNM13',
    teacher: 'ABC',
    image: require('../../../assets/images/KNM13.jpg'),
  },
  {
    name: 'Phát triển Mobile App',
    des: 'Mobile App Design',
    nameId: 'MBA13',
    teacher: 'XYZ',
    image: require('../../../assets/images/MBA13.jpg'),
  },
  {
    name: 'Phương trình bậc 3',
    des: 'Toán Đại Số',
    nameId: 'DLK4',
    teacher: 'Phạm Văn C',
    image: require('../../../assets/images/DLK4.jpg'),
  },
  {
    name: 'Làm quen với Tin học',
    des: 'Web Design',
    nameId: 'THZ102',
    teacher: 'Hoa Hoa',
    image: require('../../../assets/images/THZ102.jpg'),
  },
  {
    name: 'Gene trội Gene lặn',
    des: 'Sinh học',
    nameId: 'SLGG22',
    teacher: 'Hoa Hoa',
    image: require('../../../assets/images/SLGG22.jpg'),
  },
];

const listFile = [
  {
    name: 'Thương mại điện tử là gì.docx',
    datetime: '12:01 12/12/2020',
    subject: 'Thương mại điện tử',
    teacher: 'Hoa Hoa',
    image: require('../../../assets/images/ws.png'),
  },
  {
    name: 'Lịch sử mỹ thuật từ thế kỉ V.ppt',
    datetime: '12:01 12/12/2020',
    subject: 'Lịch sử mỹ thuật',
    teacher: 'Ms. Yến',
    image: require('../../../assets/images/pp.png'),
  },
  {
    name: 'Danh sách ôn tập.xlsx',
    datetime: '12:01 10/11/2020',
    subject: 'Ngữ văn',
    teacher: 'Nguyễn Hoa',
    image: require('../../../assets/images/xls.png'),
  },
  {
    name: 'Bài giảng toán tiết 1.mp3',
    datetime: '12:01 12/12/2020',
    subject: 'Toán đại số',
    teacher: 'ABC',
    image: require('../../../assets/images/MP3.png'),
  },
  {
    name: 'Lorem ipsum.mp4',
    datetime: '12:01 12/12/2020',
    subject: 'Tin học',
    teacher: 'XYZ',
    image: require('../../../assets/images/mp4.png'),
  },
];

export const HomePage = () => {
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

  return (
    <main className="homepage">
      <section className="line_1">
        <NienKhoa />
        <div className="list_tab">
          <section className="tab-item">
            <h1>12</h1>
            <span className="sub-header2">Môn học</span>
          </section>
          <section className="tab-item tab-item--completed">
            <h1>33</h1>
            <span className="sub-header2">Giảng viên</span>
          </section>
          <section className="tab-item">
            <h1>13</h1>
            <span className="sub-header2">Tập riêng tư</span>
          </section>
          <section className="tab-item tab-item--average">
            <h1>132</h1>
            <span className="sub-header2">Đề thi</span>
          </section>
        </div>
      </section>
      <section className="course">
        <div className="row">
          <div className="sub-header2">Tài liệu môn học đã xem gần đây</div>
          <div className="arrow">
            <button
              className={page > 0 ? 'backnext' : 'disable'}
              onClick={page > 0 ? previousPage : disable}
              disabled={page > 0 ? false : true}
            >
              <Arrow className="arrow-icon" />
            </button>
            <button
              className={page < subPerPage.length - 1 ? 'backnext' : 'disable'}
              onClick={page < subPerPage.length - 1 ? nextPage : disable}
              disabled={page < subPerPage.length - 1 ? false : true}
            >
              <ArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>

        <div className="course__grid">
          {subPerPage.map((o, i) => {
            return (
              <Link to="/course-list" className="course__grid-item" key={i}>
                <div className="course__grid-item-img">
                  <img src={o.image} alt="" className="course__grid-img" />
                  <Play className="course__grid-icon" />
                </div>
                <div className="course__grid-content">
                  <div className="sub-header2">{o.name}</div>
                  <p className="sub-title">{o.des}</p>
                  <span>{o.nameId}</span>
                  <p className="teacher">Giảng viên: {o.teacher}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <div className="line_3">
        <section className="file">
          <div className="row">
            <div className="col-sm-3">
              <section className="statistic">
                <div className="statistic__wrap">
                  <div className="sub-header2">Thống kê truy cập</div>
                  <div className="statistic-content">
                    <div className="row">
                      <div className="col-sm-8 pd-40">
                        <p className='content'>Đang truy cập:</p>
                        <p className='content'>Lượt truy cập hôm nay:</p>
                        <p className='content'>Lượt truy cập tuần này:</p>
                        <p className='content'>Lượt truy cập tháng này:</p>
                        <p className='content'>Tổng lượt truy cập:</p>
                      </div>
                      <div className="col-sm-4">
                        <p className='menu'>31</p>
                        <p className='menu'>97</p>
                        <p className='menu'>1298</p>
                        <p className='menu'>31</p>
                        <p className='menu'>31</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="sub-header2">Tệp tin tải lên gần đây</div>
                <div className="arrow">
                  <button
                    className={file > 0 ? 'backnext' : 'disable'}
                    onClick={file > 0 ? previousFile : disable}
                    disabled={file > 0 ? false : true}
                  >
                    <Arrow className="arrow-icon" />
                  </button>
                  <button
                    className={file < filePerPage.length - 1 ? 'backnext' : 'disable'}
                    onClick={file < filePerPage.length - 1 ? nextFile : disable}
                    disabled={file < filePerPage.length - 1 ? false : true}
                  >
                    <ArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
              <div className="file__grid">
                {filePerPage.map((o, i) => {
                  return (
                    <div className="file__grid-item" key={i}>
                      <div className="file__grid-item-img">
                        <img src={o.image} alt="" className="file__grid-img" />
                      </div>
                      <div className="file__grid-content">
                        <div className="sub-header2">{o.name}</div>
                        <p className="sub-title">{o.datetime}</p>
                        <span>{o.subject}</span>
                        <p className="teacher">Giảng viên: {o.teacher}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className='status'>Hiển thị 10 tệp tài liệu đã xem gần đây nhất</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
