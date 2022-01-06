import PropTypes from 'prop-types';
// material
import { visuallyHidden } from '@mui/utils';
import { Box, TableRow, TableCell, TableHead, TableSortLabel, styled, tableCellClasses } from '@mui/material';

// ----------------------------------------------------------------------

SubjectHead.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc']),
  orderBy: PropTypes.string,
  rowCount: PropTypes.number,
  headLabel: PropTypes.array,
  numSelected: PropTypes.number,
  onRequestSort: PropTypes.func,
  onSelectAllClick: PropTypes.func,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    fontWeight: '700',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function SubjectHead({ order, orderBy, headLabel, onRequestSort }: any) {
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow
        style={{
          backgroundImage: 'linear-gradient(to right, #f17f21, #ff5400)',
        }}
      >
        {headLabel.map((headCell: any) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.alignRight ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
