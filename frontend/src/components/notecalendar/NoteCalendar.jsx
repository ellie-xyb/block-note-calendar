import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { red } from '@mui/material/colors';

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
    paddingLeft: '17px',
    fontSize: '0.8em',
    border: 'none',
    textAlign: 'center',
    color: '#3E5060',
};

const secondRowStyle = {
    fontSize: '1.4em', 
    top: 69, 
    paddingTop: '2px', 
    paddingBottom: '10px',
    border: 'none',
    textAlign: 'center',
    color: '#3E5060',
};

const thirdRowStyle = { 
    fontSize: '0.72em',  
    top: 105, 
    padding: '5px', 
    paddingLeft: '15px',
    border: 'none',
    borderBottom: '0.5px solid #E0E3E7',
    textAlign: 'left',
    color: '#3E5060',
};    

export default function NoteCalendar() {
  return (
    <Paper 
    sx={{ 
        width: '98%', 
        overflow: 'hidden', 
        paddingLeft: '20px',
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
                          align={column.first ? 'right' : 'left'} 
                          width={column.width} 
                          overFlow='hidden'
                          style={{
                            borderLeft: column.first ? 'none' : '0.5px solid #E0E3E7',
                            fontSize: column.first ? '0.7em' : '1em',
                            color: column.first ? '#6F7E8C' : '1em',
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
