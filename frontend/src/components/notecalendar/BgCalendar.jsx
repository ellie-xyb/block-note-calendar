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

const columns = [
    { id: '1', label: '', width: '145px', minWidth: '35px' },
    { id: '2', label: '', width: '145px', minWidth: '35px' },
    { id: '3', label: '', width: '145px', minWidth: '35px' },
    { id: '4', label: '', width: '145px', minWidth: '35px' },
    { id: '5', label: '', width: '145px', minWidth: '35px' },
    { id: '6', label: '', width: '145px', minWidth: '35px' },
    { id: '7', label: '', width: '145px', minWidth: '35px' },
];

const rows = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: '12' },
    { id: '13' },
    { id: '14' },
    { id: '15' },
    { id: '16' },
    { id: '17' },
    { id: '18' },
    { id: '19' },
    { id: '20' },
    { id: '21' },
    { id: '22' },
    { id: '23' },
    { id: '24' },
];

export default function BgCalendar() {    
    return (
        <TableContainer sx={{ 
            position: 'absolute', 
            top: 0, 
            left: '65px', 
            buttom: 0,
            right: 0,
            zIndex: 10, 
        }}> 
        <Table stickyHeader aria-label="sticky table">
            <TableHead>  
            <TableRow>
                <TableCell 
                    colSpan={8} 
                    style={{
                        height: '120px',
                        maxHeight: '120px',
                    }}
                >
                </TableCell>
            </TableRow> 
            </TableHead>
            <TableBody>
            {rows.map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                        return (
                        <TableCell 
                            // onClick={props.handleClickOpen}
                            // onClick={
                            //     function(e){
                            //         console.log(e);
                            //     }
                            // }
                            key={column.id} 
                            style={{
                            width: column.width,
                            minWidth: column.minWidth,
                            height: '30px',
                            borderRight: '0.5px solid #E0E3E7',
                            fontSize: '1em',
                            color: '#77838E',
                            margin: 0,
                            }}
                        >
                        </TableCell>
                        );
                    })}
                    </TableRow>
                );
                })}
            </TableBody>    
        </Table>
        </TableContainer>
    );
}