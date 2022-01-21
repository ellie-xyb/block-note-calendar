import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

const column = { key: 'time', label: 'GMT+09' };

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

export default function TimeTable() {    
    return (  
        <TableContainer 
          sx={{ 
            width: '65px', 
            padding: 0,
            position: 'relative', 
            top: 0, 
            left: 0, 
            buttom: 0,
            right: 0,
            height: '90vh',
          }}> 
        <Table stickyHeader aria-label="sticky table">
            <TableHead>  
            <TableRow>
                <TableCell 
                  style={{
                    height: '120px',
                    textAlign: 'left',
                    fontSize: '0.72em',  
                    border: 'none',
                    borderBottom: '0.5px solid #E0E3E7',
                    color: '#3E5060',
                    padding: 0,
                    verticalAlign: 'bottom',
                  }}
                >
                  {column.label}
                </TableCell>
            </TableRow> 
            </TableHead>
            <TableBody>
            {rows.map((row) => {
                const value = row.time;
                return (
                    <TableRow key={row.id}>
                        <TableCell 
                            key={column.key} 
                            style={{
                            height: '40px',
                            borderRight: '0.5px solid #E0E3E7',
                            fontSize: '0.7em',
                            color: '#6F7E8C',
                            padding: 0,
                            textAlign: 'center',
                            }}
                        >
                          {value}
                        </TableCell>
                    </TableRow>
                );
            })}
            </TableBody>    
        </Table>
        </TableContainer>
    );
}