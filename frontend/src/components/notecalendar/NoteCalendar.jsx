import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'time', label: '', width: 40, first: true  },
  { id: 'sun', label: '16', width: 145  },
  { id: 'mon', label: '17', width: 145  },
  { id: 'tue', label: '18', width: 145  },
  { id: 'wed', label: '19', width: 145  },
  { id: 'thu', label: '20', width: 145  },
  { id: 'fri', label: '21', width: 145  },
  { id: 'sat', label: '22', width: 145  },
];

function createData(id, time) {
    return { id, time };
  }

const rows =[
    createData(0, '6AM'),
    createData(1, '7AM'),
    createData(2, '8AM'),
    createData(3, '9AM'),
    createData(4, '10AM'),
    createData(5, '11AM'),
    createData(6, '12PM'),
    createData(7, '1PM'),
    createData(8, '2PM'),
    createData(9, '3PM'),
    createData(10, '4PM'),
    createData(11, '5PM'),
    createData(12, '6PM'),
    createData(13, '7PM'),
    createData(14, '8PM'),
    createData(15, '9PM'),
    createData(16, '10PM'),
    createData(17, '11PM'),
    createData(18, '12AM'),
    createData(19, '1AM'),
    createData(20, '2AM'),
    createData(21, '3AM'),
    createData(22, '4AM'),
    createData(23, '5AM'),
];

const firstRowStyle = {
    paddingTop: '40px',
    paddingBottom: '5px',
    paddingLeft: '18px',
    fontSize: '0.5em',
    border: 'none',
    textAlign: 'center',
};

const secondRowStyle = {
    fontSize: '1.2em', 
    top: 69, 
    paddingTop: '5px', 
    border: 'none',
    textAlign: 'center',
};

const thirdRowStyle = { 
    fontSize: '0,3em',  
    top: 114, 
    padding: 0, 
    paddingBottom: '20px',
    border: 'none',
    borderBottom: '0.5px solid #E0E3E7',
    textAlign: 'left',
};    

export default function NoteCalendar() {
  return (
    <Paper 
    sx={{ 
        width: '99%', 
        overflow: 'hidden', 
        paddingLeft: '12px',
        }}>
      <TableContainer sx={{ height: '90vh' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ border: 'none' }}></TableCell>
              <TableCell style={firstRowStyle}>SUN</TableCell>
              <TableCell style={firstRowStyle}>MON</TableCell>
              <TableCell style={firstRowStyle}>TUE</TableCell>
              <TableCell style={firstRowStyle}>WED</TableCell>
              <TableCell style={firstRowStyle}>THU</TableCell>
              <TableCell style={firstRowStyle}>FRI</TableCell>
              <TableCell style={firstRowStyle}>SAT</TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={secondRowStyle}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
                <TableCell 
                  style={thirdRowStyle} 
                  colSpan={8} 
                  align='left'
                >
                  GMT+09
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell 
                          key={column.id} 
                          align={column.first ? 'center' : 'left'} 
                         width={column.width} 
                          overFlow='hidden'
                          style={{
                            borderRight: '0.5px solid #E0E3E7',
                          }}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
