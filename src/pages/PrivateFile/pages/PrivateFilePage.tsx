import { ButtonNoIcon, SearchBar } from 'components/Common';
import { ReactComponent as Download } from 'assets/images/fi_download.svg';
import './PrivateFilePage.scss';
import { ReactComponent as Arrow } from 'assets/images/arrow_down.svg';
import { ReactComponent as ArrowUD } from 'assets/images/arrow_updown.svg';
import { ReactComponent as ArrowPage } from 'assets/images/arrow.svg';
import { ReactComponent as More } from 'assets/images/more_vertical.svg';
import React, { useEffect, useState } from 'react';
import { db } from 'firebase-config';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export function PrivateFilePage() {
  let privateFile = [
    {
      image: require('../../../assets/images/mp4.png'),
      name: 'GTTTMDT01.mp4',
      editor: 'Nguyễn Văn A',
      dateEdit: '12/02/2020 - 14:08',
      size: '20.5 MB',
      tag: 'mp4',
    },
    {
      image: require('../../../assets/images/ws.png'),
      name: 'GTTTMDT01.doc',
      editor: 'Phạm Thị C',
      dateEdit: '12/02/2020 - 14:08',
      size: '20.5 MB',
      tag: 'doc',
    },
    {
      image: require('../../../assets/images/pp.png'),
      name: 'GTTTMDT01.pptx',
      editor: 'Trần Hoàng A',
      dateEdit: '12/02/2020 - 14:08',
      size: '20.5 MB',
      tag: 'pptx',
    },
    {
      image: require('../../../assets/images/xls.png'),
      name: 'GTTTMDT01.xlsx',
      editor: 'Charlie',
      dateEdit: '12/02/2020 - 14:08',
      size: '20.5 MB',
      tag: 'xlsx',
    },
    {
      image: require('../../../assets/images/pp.png'),
      name: 'GTTTMDT02.pptx',
      editor: 'Trần Hoàng A',
      dateEdit: '12/02/2020 - 14:08',
      size: '20.5 MB',
      tag: 'pptx',
    },
    {
      image: require('../../../assets/images/ws.png'),
      name: 'GTTTMDT02.doc',
      editor: 'Phạm Thị C',
      dateEdit: '12/02/2020 - 14:08',
      size: '20.5 MB',
      tag: 'doc',
    },
    {
      image: require('../../../assets/images/xls.png'),
      name: 'GTTTMDT02.xlsx',
      editor: 'Trần Hoàng A',
      dateEdit: '12/02/2020 - 14:08',
      size: '20.5 MB',
      tag: 'xlsx',
    },
    {
      image: require('../../../assets/images/mp3.png'),
      name: 'GTTTMDT02.mp3',
      editor: 'Phạm Thị C',
      dateEdit: '12/02/2020 - 14:08',
      size: '20.5 MB',
      tag: 'mp3',
    },
    {
      image: require('../../../assets/images/mp4.png'),
      name: 'GTTTMDT03.mp4',
      editor: 'Nguyễn Văn A',
      dateEdit: '12/02/2020 - 14:08',
      size: '20.5 MB',
      tag: 'mp4',
    },
    {
      image: require('../../../assets/images/xls.png'),
      name: 'GTTTMDT05.xlsx',
      editor: 'Trần Hoàng A',
      dateEdit: '12/02/2020 - 14:08',
      size: '20.5 MB',
      tag: 'xlsx',
    },
  ];
  const [filter, setFilter] = useState({
    title_like: '',
    tag: '',
  });
  const [order, setOrder] = useState('ASC');
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [category, setCategory] = useState('');
  const [clicked, setClicked] = useState(false)
  let [files, setFiles] = useState<any>([]);
  // Data Firebase
  // const [data, setData] = useState<{ [x: string]: any }[]>([]);
  // const getData = async () => {
  //   const querySnapshot = await getDocs(collection(db, 'privateFile'));
  //   let arr: { [x: string]: any }[] = [];
  //   querySnapshot.forEach((doc) => {
  //     arr.push({ ...doc.data() });
  //   });
  //   setData(arr);
  // };

  useEffect(() => {
    if (category === '') {
      setFiles(privateFile);
    } else {
      files = privateFile.filter((file: any) => file.tag == category);
      setFiles(files);
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
      const sorted = [...files].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
      setFiles(sorted);
      setOrder('DSC');
    } else if (order === 'DSC') {
      const sorted = [...files].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1));
      setFiles(sorted);
      setOrder('ASC');
    }
  };

  // 
  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value));
  };

  // Checked
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (name === 'allSelect') {
      let tempFile = files.map((file: any) => ({ ...file, isChecked: checked }));
      setFiles(tempFile);
    } else {
      let tempFile = files.map((file: any) => (file.name === name ? { ...file, isChecked: checked } : file));
      setFiles(tempFile);
    }
  };

  // Filter Select Options
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <div className="right">
        <Download className="down-icon" />
        <div className="inactived-icon"></div>
        <ButtonNoIcon text="Đăng tải" />
      </div>
      <div className="board_body">
        <div className="top">
          <div className="dropdown-select">
            <select id="form-control" onChange={handleSelectChange}>
              <option value="">Thể loại</option>
              <option value="mp4">Mp4</option>
              <option value="mp3">Mp3</option>
              <option value="doc">Doc</option>
              <option value="pptx">Pptx</option>
              <option value="xlsx">Xlsx</option>
            </select>
            <div className="arrow">
              <Arrow />
            </div>
          </div>
          <SearchBar onSubmit={handleFilterChange} />
        </div>
        <div className="mid">
          <table>
            <thead className="sub-header2">
              <tr>
                <th className="check">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="allSelect"
                    checked={files.filter((file: any) => file?.isChecked !== true).length < 1}
                    onChange={handleChange}
                  />
                </th>
                <th>
                  <span>Thể loại</span>
                  <ArrowUD className="header-icon" />
                </th>
                <th>
                  <span>Tên</span>
                  <ArrowUD className="header-icon" onClick={() => handleSort('name')} />
                </th>
                <th>
                  <span>Người chỉnh sửa</span>
                  <ArrowUD className="header-icon" onClick={() => handleSort('editor')} />
                </th>
                <th>
                  <span>Ngày sửa lần cuối</span>
                  <ArrowUD className="header-icon" />
                </th>
                <th>
                  <span>Kích thước</span>
                  <ArrowUD className="header-icon" />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(rowsPerPage > 0 ? files.slice(0, rowsPerPage) : files)
                .filter((value: any) => {
                  if (filter.title_like === '') {
                    return value;
                  } else if (
                    value.editor.toLowerCase().includes(filter.title_like.toLowerCase()) ||
                    value.name.toLowerCase().includes(filter.title_like.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((o: any, i: number) => (
                  <tr className="content" key={i}>
                    <td className="check">
                      <input
                        type="checkbox"
                        className="checkbox"
                        name={o.name}
                        checked={o?.isChecked || false}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <img src={o.image} alt="" className="mid-img" />
                    </td>
                    <td>{o.name}</td>
                    <td>{o.editor}</td>
                    <td>{o.dateEdit}</td>
                    <td>{o.size}</td>
                    <td className='tab'>
                      <More className="mid-icon" onClick={(e) => setClicked(!clicked)}/>
                      <div className='tab-menu'>
                        <ul>
                          <li>
                            <span className='content'>Xem trước</span>
                          </li>
                          <li>
                            <span className='content'>Đổi tên</span>
                          </li>
                          <li>
                            <span className='content'>Tải xuống</span>
                          </li>
                          <li>
                            <span className='content'>Xóa</span>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
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
