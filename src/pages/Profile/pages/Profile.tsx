import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import './Profile.scss';
import Avatar from 'assets/images/avt.png';

const Tab = styled(TabUnstyled)`
  font-family: Mulish;
  color: var(--blue-orange-7);
  cursor: pointer;
  font-size: 18px;
  line-height: 21px;
  background-color:transparent;
  opacity: 0.5;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    background-color: #e2e4e4c9;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: #e2e4e4c9;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: var(--blue-orange-7);
    opacity: 1;
    color: #ffffff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: Mulish;
  font-size: 18px;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 499px;
  background-color: #f2f2f2;
  border-radius: 32px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export const Profile = () => {
  const [selectedImage, setSelectedImage] = React.useState(undefined);
  const [gender, setGender] = React.useState('Nam');
  const [edit, setEdit] = React.useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
    setValues({
      email: 'admin123@school.com.vn',
      phone: '0324616485',
    });
  };

  const [values, setValues] = React.useState({
    email: 'admin123@school.com.vn',
    phone: '0324616485',
  });

  const handleChangeValue = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <h1 className='header'>Thông tin người dùng</h1>
      <TabsUnstyled defaultValue={0}>
        <TabsList style={{ width: '40%' }}>
          <Tab>Thông tin cá nhân</Tab>
          <Tab>Thay đổi mật khẩu</Tab>
        </TabsList>
        <TabPanel value={0}>
          <div style={{ textAlign: 'right' }}>
            <button id="editBtn" className="btn btn-success" onClick={handleEdit} hidden={edit ? true : false}>
              Chỉnh sửa
            </button>
          </div>
          <div className="card" style={{ borderRadius: '16px', marginTop: '20px' }}>
            <div className="card-header" id="geneInfo">
              <div className='title'>
                <b>Thông tin chung</b>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div style={{ width: '250px', height: '300px' }}>
                  <div className="bigDiv">
                    <img
                      width="232px"
                      height="232px"
                      style={{ borderRadius: '50%' }}
                      src={selectedImage ? URL.createObjectURL(selectedImage) : Avatar}
                      alt=""
                    />

                    <div className="iconUpload">
                      <label htmlFor="formId">
                        <input name="" type="file" id="formId" hidden accept="image/*" onChange={imageChange} />
                        <CameraAltOutlinedIcon className="cusInput" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="row">
                  <div className="col-sm-6" id="colOne">
                    <div className="row">
                      <div className="col-sm-3" id="labelCus">
                        <label id="labelCus-content" htmlFor="usercode">
                          <p className='menu'>Mã người dùng:</p>
                        </label>
                      </div>
                      <div className="col-sm-9">
                        <div className="inputCus">
                          <input
                            style={{ color: 'gray' }}
                            className="input-code"
                            type="text"
                            id="usercode"
                            disabled
                            value="AD1235"
                          />
                        </div>
                      </div>
                      <div className="col-sm-3" id="labelCus">
                        <label id="labelCus-content" htmlFor="gender">
                          <p className='menu'>Giới tính:</p>
                        </label>
                      </div>
                      <div className="col-sm-9">
                        <div className="inputCus gender">
                          <Select disabled id="gender" value={gender} className="input-code" onChange={handleChange}>
                            <MenuItem value={'Nam'}>Nam</MenuItem>
                            <MenuItem value={'Nữ'}>Nữ</MenuItem>
                            <MenuItem value={'Khác'}>Khác</MenuItem>
                          </Select>
                        </div>
                      </div>
                      <div className="col-sm-3" id="labelCus">
                        <label id="labelCus-content" htmlFor="role">
                          <p className='menu'>Vai trò:</p>
                        </label>
                      </div>
                      <div className="col-sm-9">
                        <div className="inputCus">
                          <input
                            style={{ color: 'gray' }}
                            className="input-code"
                            type="text"
                            id="role"
                            disabled
                            value="Quản lý"
                          />
                        </div>
                      </div>
                      <div className="col-sm-3" id="labelCus">
                        <label id="labelCus-content" htmlFor="email">
                          <p className='menu'>Email:</p>
                        </label>
                      </div>
                      <div className="col-sm-9">
                        <div className="inputCus">
                          <input
                            style={{ color: 'gray' }}
                            className={edit ? 'editInput' : 'input-code'}
                            type="text"
                            id="email"
                            name="email"
                            disabled={edit ? false : true}
                            value={values.email}
                            onChange={handleChangeValue}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6" id="colOne">
                    <div className="row">
                      <div className="col-sm-3" id="labelCus">
                        <label id="labelCus-content" htmlFor="username">
                          <p className='menu'>Tên người dùng:</p>
                        </label>
                      </div>
                      <div className="col-sm-9">
                        <div className="inputCus">
                          <input
                            style={{ color: 'gray' }}
                            className="input-code"
                            type="text"
                            id="username"
                            disabled
                            value="admin123"
                          />
                        </div>
                      </div>

                      <div className="col-sm-3" id="labelCus">
                        <label id="labelCus-content" htmlFor="phone">
                          <p className='menu'>Số điện thoại:</p>
                        </label>
                      </div>
                      <div className="col-sm-9">
                        <div className="inputCus">
                          <input
                            style={{ color: 'gray' }}
                            className={edit ? 'editInput' : 'input-code'}
                            type="text"
                            id="phone"
                            name="phone"
                            disabled={edit ? false : true}
                            value={values.phone}
                            onChange={handleChangeValue}
                          />
                        </div>
                      </div>
                      <div className="col-sm-3" id="addressCus">
                        <label id="addressCus-content" htmlFor="address">
                          <p className='menu'>Địa chỉ:</p>
                        </label>
                      </div>
                      <div className="col-sm-9">
                        <div className="inputCus">
                          <textarea
                            style={{
                              color: 'gray',
                              height: '100px',
                            }}
                            className="input-code"
                            id="address"
                            disabled
                            value="86/33 Âu Cơ, phường 9, quận Tân Bình, Thành Phố Hồ Chí Minh"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {edit && (
                <div
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    marginBottom: '20px',
                    width: '100%'
                  }}
                >
                  <button onClick={handleCancel} id="editBtn" className="btn btn-secondary">
                    Huỷ
                  </button>
                  <button onClick={() => setEdit(false)} id="editBtn" className="btn btn-success">
                    Lưu
                  </button>
                </div>
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={1}>
          <div className="card" style={{ borderRadius: '16px', marginTop: '20px' }}>
            <div className="card-header" id="geneInfo">
              <div style={{ margin: '10px 0px 10px 30px' }}>
                <p className='menu'>Thay đổi mật khẩu</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9" style={{ marginTop: '20px' }}>
                <div className="row">
                  <div className="col-sm-4">
                    <label id="passCus" htmlFor="password">
                      <p className='menu'>
                        Mật khẩu hiện tại:
                        <span style={{ color: 'red' }}>*</span>
                      </p>
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <div className="inputCus">
                      <input style={{ color: '#373839' }} className="input-code" type="password" id="password" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <label id="passCus" htmlFor="newpass">
                      <p className='menu'>
                        Mật khẩu mới:
                        <span style={{ color: 'red' }}>*</span>
                      </p>
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <div className="inputCus">
                      <input style={{ color: '#373839' }} className="input-code" type="password" id="newpass" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <label id="passCus" htmlFor="veripass">
                      <p className='menu'>
                        Nhập lại mật khẩu mới:
                        <span style={{ color: 'red' }}>*</span>
                      </p>
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <div className="inputCus">
                      <input style={{ color: '#373839' }} className="input-code" type="password" id="veripass" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-3" style={{ marginTop: '20px' }}>
                <div className="row info">
                  <div className="col-sm-1">
                    <InfoOutlinedIcon style={{ color: '#FF7506' }} />
                  </div>
                  <div
                    className="col-sm-11"
                    style={{
                      fontStyle: 'italic',
                      color: '#373839',
                      fontSize: '14px',
                    }}
                  >
                    <label className='note'>
                      Mật khẩu phải có ít nhất 8 kí tự bao gồm:
                      <br />
                      - Chữ cái
                      <br />- Số <br />- Chữ cái viết hoa <br />- Chữ cái viết thường
                      <br /> - Các kí tự đặc biệt như !~/)*^$&...
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'block',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              <button onClick={handleCancel} id="editBtn" className="btn btn-secondary">
                Huỷ
              </button>
              <button onClick={() => setEdit(false)} id="editBtn" className="btn btn-success">
                Lưu
              </button>
            </div>
          </div>
        </TabPanel>
      </TabsUnstyled>
    </div>
  );
};
