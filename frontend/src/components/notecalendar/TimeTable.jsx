import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';

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
        <TableContainer sx={{ width: '45px' }}> 
        <Table stickyHeader aria-label="sticky table">
            <TableHead>  
            <TableRow>
                <TableCell 
                    style={{
                        height: '100px',
                        width: '100%',
                    }}
                >
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
                            height: '30px',
                            borderRight: '0.5px solid #E0E3E7',
                            fontSize: '0.7em',
                            color: '#6F7E8C',
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