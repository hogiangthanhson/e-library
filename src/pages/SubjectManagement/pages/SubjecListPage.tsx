import { ButtonNoIcon, Loading, NienKhoa, SearchBar } from 'components/Common';
import { ReactComponent as Download } from 'assets/images/fi_download.svg';
import './SubjectListPage.scss';
import { ReactComponent as Arrow } from 'assets/images/arrow_down.svg';
import { ReactComponent as ArrowUD } from 'assets/images/arrow_updown.svg';
import { ReactComponent as ArrowPage } from 'assets/images/arrow.svg';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SubjectItem from '../components/SubjectItem';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from 'firebase-config';

export function SubjectListPage() {
  let listCourse = [
    {
      courseId: '2020-6A',
      courseName: 'Thương mại điện tử',
      date: '12/02/2020',
      docPending: '15/20',
      slug: 'ecommerce',
      status: false,
      teacher: 'Nguyễn Văn A',
    },
    {
      courseId: '2020-6B',
      courseName: 'Nguyên lý kế toán',
      date: '12/02/2020',
      docPending: '07/10',
      slug: 'accounting-principles',
      status: false,
      teacher: 'Phạm Thị C',
    },
    {
      courseId: '2020-6C',
      courseName: 'Hệ thống thông tin',
      date: '15/09/2020',
      docPending: '10/20',
      slug: 'information-system',
      status: true,
      teacher: 'Trần Hoàng A',
    },
    {
      courseId: '2020-7A',
      courseName: 'Luật thương mại',
      date: '30/07/2020',
      docPending: '09/20',
      slug: 'commercial-law',
      status: true,
      teacher: 'Charlie',
    },
    {
      courseId: '2020-7C',
      courseName: 'Ngân hàng',
      date: '12/03/2020',
      docPending: '15/20',
      slug: 'bank',
      status: true,
      teacher: 'Trần Hoàng A',
    },
  ];
  let listHeader = [
    {
      key: 'courseID',
      value: 'Mã môn học',
    },
    {
      key: 'courseName',
      value: 'Tên môn học',
    },
    {
      key: 'teacher',
      value: 'Giảng viên',
    },
    {
      key: 'docPending',
      value: 'Số tài liệu chờ duyệt',
    },
    {
      key: 'status',
      value: 'Tình trạng tài liệu môn học',
    },
    {
      key: 'date',
      value: 'Ngày gửi phê duyệt',
    },
  ];

  const [filter, setFilter] = useState({
    title_like: '',
  });
  const [order, setOrder] = useState('ASC');
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [category, setCategory] = useState('');

  // const addData = async () => {
  //   await addDoc(collection(db, 'courses'), listHeader);
  // };

  let [data, setData] = useState<any>([]);
  // const dataCollectionRef = collection(db, 'courses');
  useEffect(() => {
    // const getData = async () => {
    //   const querySnapshot = await getDocs(dataCollectionRef);
    //   let arr: any = [];
    //   querySnapshot.forEach((doc) => {
    //     arr.push({ ...doc.data() });
    //   });
    //   setData(arr);
    // };
    // getData();

    if (category === '') {
      setData(listCourse);
    } else {
      data = listCourse.filter((file: any) => file.courseName === category || file.teacher === category);
      setData(data);
    }
  }, [category]);

  // Filter
  const handleFilterChange = (newFilter: any) => {
    setFilter({
      ...filter,
      title_like: newFilter.searchTerm,
    });
  };

  // Sort
  const handleSort = (col: any) => {
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) => (a.courseId.toLowerCase() > b.courseId.toLowerCase() ? 1 : -1));
      setData(sorted);
      setOrder('DSC');
    } else if (order === 'DSC') {
      const sorted = [...data].sort((a, b) => (a.courseId.toLowerCase() < b.courseId.toLowerCase() ? 1 : -1));
      setData(sorted);
      setOrder('ASC');
    }
  };

  //
  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value));
  };

  // Filter Select Options
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <NienKhoa />
      </div>
      <div className="board_body">
        <div className="top">
          <div className="col-4" style={{ display: 'flex' }}>
            <div id="course" style={{ marginRight: '32px' }}>
              <span>Môn học</span>
              <div className="dropdown-select">
                <select id="form-control" onChange={handleSelectChange}>
                  <option defaultValue="Tất cả môn học" value="">
                    Tất cả môn học
                  </option>
                  <option value="Thương mại điện tử">Thương mại điện tử</option>
                  <option value="Nguyên lý kế toán">Nguyên lý kế toán</option>
                  <option value="Hệ thống thông tin">Hệ thống thông tin</option>
                  <option value="Luật thương mại">Luật thương mại</option>
                  <option value="Ngân hàng">Ngân hàng</option>
                </select>
                <div className="arrow">
                  <Arrow />
                </div>
              </div>
            </div>
            <div id="teacher" style={{ marginRight: '32px' }}>
              <span>Giảng viên</span>
              <div className="dropdown-select">
                <select id="form-control" onChange={handleSelectChange}>
                  <option defaultValue="Tất cả giảng viên" value="">
                    Tất cả giảng viên
                  </option>
                  <option value="Nguyễn Văn A">Nguyễn Văn A</option>
                  <option value="Nguyễn Văn C">Nguyễn Văn C</option>
                  <option value="Văn Thị B">Văn Thị B</option>
                </select>
                <div className="arrow">
                  <Arrow />
                </div>
              </div>
            </div>
            <div id="status">
              <span>Tình trạng tài liệu</span>
              <div className="dropdown-select">
                <select id="form-control" onChange={handleSelectChange}>
                  <option defaultValue="Tất cả tình trạng" value="">
                    Tất cả tình trạng
                  </option>
                  <option value="">Đã phê duyệt</option>
                  <option value="">Chờ phê duyệt</option>
                </select>
                <div className="arrow">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <SearchBar onSubmit={handleFilterChange} />
          </div>
        </div>
        <div className="mid">
          <table>
            <thead className="sub-header2">
              <tr>
                {listHeader.map((o, i) => (
                  <th key={i}>
                    <span>{o.value}</span>
                    <ArrowUD className="header-icon" onClick={() => handleSort(o.key)} />
                  </th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(rowsPerPage > 0 ? data.slice(0, rowsPerPage) : data)
                .filter((value: any) => {
                  if (filter.title_like === '') {
                    return value;
                  } else if (
                    value.courseId.toLowerCase().includes(filter.title_like.toLowerCase()) ||
                    value.courseName.toLowerCase().includes(filter.title_like.toLowerCase()) ||
                    value.teacher.toLowerCase().includes(filter.title_like.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((o: any, i: number) => (
                  <SubjectItem {...o} key={i} />
                ))}
            </tbody>
          </table>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="status">Hiển thị</span>
            <input className="bottom-input" type="text" defaultValue={8} onChange={handlePageChange} />
            <span className="status"> hàng trong mỗi trang</span>
          </div>
          <div className="paginate">
            <ArrowPage className="paginate-icon" />
            <div className="content">
              <span>1</span>
            </div>
            <div className="content active">
              <span>2</span>
            </div>
            <div className="content">
              <span>3</span>
            </div>
            <div className="content">
              <span>...</span>
            </div>
            <div className="content">
              <span>100</span>
            </div>
            <ArrowPage className="paginate-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
