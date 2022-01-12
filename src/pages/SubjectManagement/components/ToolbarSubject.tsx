import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import searchFill from '@mui/icons-material/Search';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Toolbar,
  OutlinedInput,
  InputAdornment,
  Grid,
  Paper,
  ButtonGroup,
  Button,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 80,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 400,
  height: 40,
  borderTop: '1px solid black !important',
  borderRadius: `24px !important`,
  marginTop: '60px',
  marginRight: '40px',
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': {
    boxShadow: theme.shadows,
    borderRadius: `24px !important`,
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `grey !important`,
    borderRadius: `24px !important`,
    borderTop: `1px solid black !important`,
  },
}));

// ----------------------------------------------------------------------

SubjectToolbar.propTypes = {
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

const options = [
  'Tất cả môn học',
  'Thương mại điện tử',
  'Nguyên lý kế toán',
  'Hệ thống thông tin',
  'Luật thương mại',
  'Ngân hàng',
];

const teacher = ['Tất cả giảng viên', 'Nguyễn Văn A', 'Nguyễn Văn C', 'Văn Thị B'];

const status = ['Tất cả tình trạng', 'Đã phê duyệt', 'Chờ phê duyệt'];

export default function SubjectToolbar({ filterName, onFilterName }: any) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openTeacher, setOpenTeacher] = useState(false);
  const anchorRefTeacher = useRef<HTMLDivElement>(null);
  const [selectedIndexTeacher, setSelectedIndexTeacher] = useState(0);
  const [openStatus, setOpenStatus] = useState(false);
  const anchorRefStatus = useRef<HTMLDivElement>(null);
  const [selectedIndexStatus, setSelectedIndexStatus] = useState(0);

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

  const handleTeacherClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndexTeacher(index);
    setOpenTeacher(false);
  };

  const handleToggleTeacher = () => {
    setOpenTeacher((prevOpen) => !prevOpen);
  };

  const handleCloseTeacher = (event: Event) => {
    if (anchorRefTeacher.current && anchorRefTeacher.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpenTeacher(false);
  };

  const handleStatusClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndexStatus(index);
    setOpenStatus(false);
  };

  const handleToggleStatus = () => {
    setOpenStatus((prevOpen) => !prevOpen);
  };

  const handleCloseStatus = (event: Event) => {
    if (anchorRefStatus.current && anchorRefStatus.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpenStatus(false);
  };

  return (
    <RootStyle
      sx={{
        color: 'primary.main',
        bgcolor: 'primary.lighter',

        marginTop: '20px',
      }}
    >
      <Grid container>
        <Grid item xs={2}>
          <div
            style={{
              paddingLeft: '0px',
              height: '90px',
              marginTop: '40px',
              marginLeft: '40px',
            }}
          >
            <React.Fragment>
              <label style={{ fontSize: '16px', marginRight: '20px', color: '#373839' }}>Môn học</label>
              <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                <Button style={{ background: '#fff', color: '#373839' }} className="year">
                  {options[selectedIndex]}
                </Button>
                <Button
                  className="down"
                  size="small"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  style={{
                    background: '#fff',
                    color: '#373839',
                  }}
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
                              onClick={(event: any) => handleMenuItemClick(event, index)}
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
        </Grid>
        <Grid item xs={2}>
          <div
            style={{
              paddingLeft: '0px',
              height: '90px',
              marginTop: '40px',
              marginLeft: '40px',
            }}
          >
            <React.Fragment>
              <label style={{ fontSize: '16px', marginRight: '20px', color: '#373839' }}>Giảng viên</label>
              <ButtonGroup variant="contained" ref={anchorRefTeacher} aria-label="split button">
                <Button style={{ background: '#fff', color: '#373839' }} className="year">
                  {teacher[selectedIndex]}
                </Button>
                <Button
                  style={{ background: '#fff', color: '#373839' }}
                  className="down"
                  size="small"
                  aria-controls={openTeacher ? 'split-button-menu' : undefined}
                  aria-expanded={openTeacher ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggleTeacher}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper
                open={openTeacher}
                anchorEl={anchorRefTeacher.current}
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
                      <ClickAwayListener onClickAway={handleCloseTeacher}>
                        <MenuList id="split-button-menu">
                          {teacher.map((teach, index) => (
                            <MenuItem
                              key={teach}
                              selected={index === selectedIndexTeacher}
                              onClick={(event: any) => handleTeacherClick(event, index)}
                            >
                              {teach}
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
        </Grid>
        <Grid item xs={2}>
          <div
            style={{
              paddingLeft: '0px',
              height: '90px',
              marginTop: '40px',
              marginLeft: '40px',
            }}
          >
            <React.Fragment>
              <label style={{ fontSize: '16px', marginRight: '20px', color: '#373839' }}>Tình trạng tài liệu</label>
              <ButtonGroup variant="contained" ref={anchorRefStatus} aria-label="split button">
                <Button style={{ background: '#fff', color: '#373839' }} className="year">
                  {status[selectedIndex]}
                </Button>
                <Button
                  style={{ background: '#fff', color: '#373839' }}
                  className="down"
                  size="small"
                  aria-controls={openStatus ? 'split-button-menu' : undefined}
                  aria-expanded={openStatus ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggleStatus}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper
                open={openStatus}
                anchorEl={anchorRefStatus.current}
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
                      <ClickAwayListener onClickAway={handleCloseStatus}>
                        <MenuList id="split-button-menu">
                          {status.map((stt, index) => (
                            <MenuItem
                              key={stt}
                              selected={index === selectedIndexStatus}
                              onClick={(event: any) => handleStatusClick(event, index)}
                            >
                              {stt}
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
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex' }}>
          <SearchStyle
            value={filterName}
            onChange={onFilterName}
            placeholder="Tìm kết quả theo tên, lớp, môn học,..."
            startAdornment={
              <InputAdornment position="start">
                <Box component={searchFill} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
    </RootStyle>
  );
}
