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

export default function OverlayDiv() {
    
    const columns = [
        { id: '0', label: '', width: '35px', minWidth: '35px', first: true },
        { id: '1', label: '', width: '145px', minWidth: '35px' },
        { id: '2', label: '', width: '145px', minWidth: '35px' },
        { id: '3', label: '', width: '145px', minWidth: '35px' },
        { id: '4', label: '', width: '145px', minWidth: '35px' },
        { id: '5', label: '', width: '145px', minWidth: '35px' },
        { id: '6', label: '', width: '145px', minWidth: '35px' },
        { id: '7', label: '', width: '145px', minWidth: '35px' },
    ];
      
    return (
    <>    
        <TableContainer sx={{ 
          opacity: 0.6,
          backgroundColor: 'red',
          zIndex: 100,
          position: 'absolute', 
          top: 0, 
          left: 0, 
          buttom: 0,
          right: 0,
        }}>
        <Table stickyHeader aria-label="sticky table" sx={{ height: '1652px' }}>
            <TableHead>  
            <TableRow>
                <TableCell 
                    colSpan={8} 
                    style={{
                        height: '106px',
                        backgroundColor: 'red',
                    }}
                >
                </TableCell>
            </TableRow> 
            </TableHead>    
            <TableBody>
                <TableRow hover style={{}}>
                {columns.map((column) => {
                    return (
                    <TableCell 
                        key={column.id} 
                        align={column.first ? 'right' : 'left'} 
                        overFlow='hidden'
                        style={{
                        width: column.width,
                        minWidth: column.minWidth,
                        height: '720px',
                        borderLeft: column.first ? 'none' : '0.5px solid #E0E3E7',
                        fontSize: column.first ? '0.7em' : '1em',
                        color: column.first ? '#6F7E8C' : '#77838E',
                        margin: 0,
                        }}
                    >
                    </TableCell>
                    );
                })}
                </TableRow>
            </TableBody>    
        </Table>
        </TableContainer>
    </>
  );
}