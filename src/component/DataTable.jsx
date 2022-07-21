import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TextField from '@mui/material/TextField';

import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Typography,
    TableFooter,
    TablePagination,
    IconButton,

} from '@mui/material';


import { useFetchUsers } from "../hooks/useFetchUsers";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };


  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function DataTable () {
    const { userList, searcher, getUsers } = useFetchUsers( );
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect( () => {
      getUsers();
    }, []);
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userList.length) : 0;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem 0rem'
         }}>
              <TextField onChange={searcher} label="Search by alias" />
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem 0rem'
        }}
      >
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 15,
          margin: '10px 10px',
          maxWidth: 950
        }}
      >
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{
                fontWeight: 'bold',
                backgroundColor: "#174d82",
                color: "#f5f5f5",
                }}
              >
                
              </TableCell>
              <TableCell sx={{
                fontWeight: 'bold',
                backgroundColor: "#174d82",
                color: "#f5f5f5"
                }}
              >
                ALIAS
              </TableCell>
              <TableCell sx={{
                fontWeight: 'bold',
                backgroundColor: "#174d82",
                color: "#f5f5f5"
                }}
              >
                CREATED AT
              </TableCell>
              <TableCell sx={{
                fontWeight: 'bold',
                backgroundColor: "#174d82",
                color: "#f5f5f5"              
                }}
              >
                ACTIVED
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? userList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : userList
            ).map((row) => (
              <TableRow
                key={row.alias}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center'>    
                  <Avatar
                    align='center'
                    alt={row.alias}
                    src='.'
                    sx={{
                      backgroundColor: "#7e57c2",
                      color: "#e0e0e0",
                      margin: "auto"
                    }}
                  />
                </TableCell>
                <TableCell>
                <Typography
                  sx={{
                    fontWeight: 'bold'
                  }}
                >
                  {row.alias}
                </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    {row.createdAt}
                  </Typography>
                </TableCell>
                <TableCell 
                  align='center' 
                >
                  <Box
                  sx={{
                    margin: '7px 0px',
                    lineHeight: '2.43',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color: 'white',
                    borderRadius: 8,
                    backgroundColor: 
                      (row.actived ? "#4caf50" : "#f44336")                
                  }}>
                    {row.actived ? "Actived" : "Inactivated"}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 20, { label: 'All', value: -1 }]}
                colSpan={3}
                count={userList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      </Box>
      
    </Box>
  );
}
