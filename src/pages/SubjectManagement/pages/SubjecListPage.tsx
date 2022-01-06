import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {filter} from 'lodash';
// material
import {
  Link,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  TablePagination,
  styled,
  tableCellClasses,
  Pagination,
} from '@mui/material';
// components
import SubjectHead from '../components/HeaderSubject';
import SubjectToolbar from '../components/ToolbarSubject';
import SubjectMoreMenu from '../components/MenuSubject';
import { NienKhoa } from 'components/Common';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'subCode', label: 'Mã môn học', alignRight: false },
  { id: 'subName', label: 'Tên môn học', alignRight: false },
  { id: 'teacher', label: 'Giảng viên', alignRight: false },
  { id: 'fileNum', label: 'Số tài liệu chờ duyệt', alignRight: false },
  { id: 'isVerifed', label: 'Tình trạng tài liệu môn học', alignRight: false },
  { id: 'date', label: 'Ngày gửi phê duyệt', alignRight: false },
  { id: '' },
];

const USERLIST = [
  {
    subCode: '2020-6A',
    subName: 'Thương mại điện tử',
    teacher: 'Nguyễn Văn A',
    fileNum: '15/20',
    isVerified: 'Chờ phê duyệt',
    date: '12/02/2021',
  },
  {
    subCode: '2020-6B',
    subName: 'Nguyên lý kế toán',
    teacher: 'Phạm Thị C',
    fileNum: '07/10',
    isVerified: 'Chờ phê duyệt',
    date: '12/02/2021',
  },
  {
    subCode: '2020-6C',
    subName: 'Hệ thống thông tin',
    teacher: 'Trần Hoàng A',
    fileNum: '10/20',
    isVerified: 'Đã phê duyệt',
    date: '15/09/2020',
  },
  {
    subCode: '2020-7A',
    subName: 'Luật thương mại',
    teacher: 'Charlie',
    fileNum: '09/20',
    isVerified: 'Đã phê duyệt',
    date: '30/07/2020',
  },
  {
    subCode: '2020-7C',
    subName: 'Ngân hàng',
    teacher: 'Trần Hoàng A',
    fileNum: '15/20',
    isVerified: 'Đã phê duyệt',
    date: '12/03/2020',
  },
];

// ----------------------------------------------------------------------

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#F0F3F6',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: any, orderBy: any) {
  return order === 'desc'
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array: any, comparator: any, query: any) {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_subject) => _subject.subName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el: any) => el[0]);
}

const options = ['2020-2021', '2019-2020', '2018-2019'];

export const SubjectListPage = () => {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');

  const [orderBy, setOrderBy] = useState('subName');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="#C9C4C0" href="/">
      Quản lý học viên
    </Link>,

    <Typography key="2" color="text.primary">
      <h1>
        <b>Danh sách môn học</b>
      </h1>
    </Typography>,
  ];

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

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = ({ event, newPage }: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event: any) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  return (
    <div>
      <div className="row">
        <div id="nienkhoa" className="col-sm-3" style={{ paddingLeft: '0px', height: '90px' }}>
          <NienKhoa />
        </div>
      </div>
      <Card
        sx={{
          boxShadow: '4px 4px 25px 4px rgba(154, 202, 245, 0.25)',
          borderRadius: '16px',
        }}
      >
        <SubjectToolbar filterName={filterName} onFilterName={handleFilterByName} />

        <TableContainer
          sx={{
            minWidth: 800,
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <Table sx={{ width: '90%', overflow: 'hidden', borderRadius: '8px' }}>
            <SubjectHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={USERLIST.length}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: never) => {
                const { subCode, subName, teacher, fileNum, isVerified, date } = row;

                return (
                  <StyledTableRow hover key={subCode}>
                    <StyledTableCell align="left">{subCode}</StyledTableCell>
                    <StyledTableCell component="th" scope="row" padding="none">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2" noWrap>
                          {subName}
                        </Typography>
                      </Stack>
                    </StyledTableCell>

                    <StyledTableCell align="left">{teacher}</StyledTableCell>
                    <StyledTableCell align="left">{fileNum}</StyledTableCell>
                    <StyledTableCell align="left">{isVerified}</StyledTableCell>
                    <StyledTableCell align="left">{date}</StyledTableCell>
                    <StyledTableCell align="right">
                      <SubjectMoreMenu />
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={USERLIST.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </div>
  );
};
