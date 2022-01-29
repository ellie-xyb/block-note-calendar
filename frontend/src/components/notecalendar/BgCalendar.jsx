import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const columns = [
    { id: '1', label: '', width: '120px', minWidth: '75px', first: 'true' },
    { id: '2', label: '', width: '120px', minWidth: '75px' },
    { id: '3', label: '', width: '120px', minWidth: '75px' },
    { id: '4', label: '', width: '120px', minWidth: '75px' },
    { id: '5', label: '', width: '120px', minWidth: '75px' },
    { id: '6', label: '', width: '120px', minWidth: '75px' },
    { id: '7', label: '', width: '120px', minWidth: '75px' },
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
        <TableContainer 
        style={{
          zIndex: 200,
          minWidth: '525px',
          maxWidth: '100%',
          padding: 0,
          margin: 0,
        }}> 
        <Table>
            <TableHead>  
            <TableRow>
                <TableCell 
                    colSpan={8} 
                    style={{
                        height: '120px',
                        padding: 0,
                    }}
                >
                </TableCell>
            </TableRow> 
            </TableHead>
            <TableBody>
            {rows.map((row) => {
                return (
                    <TableRow role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                        return (
                        <TableCell 
                            key={column.id} 
                            style={{
                            width: column.width,
                            minWidth: column.minWidth,
                            height: '55px',
                            borderBottom: '0.5px solid #E0E3E7',
                            borderRight: '0.5px solid #E0E3E7',
                            borderLeft: column.first ? '0.5px solid #E0E3E7' : 'none',
                            fontSize: '1em',
                            color: '#77838E',
                            padding: 0,
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