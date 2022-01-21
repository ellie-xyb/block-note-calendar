import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';

const firstRowStyle = {
    // paddingTop: '40px',
    // paddingBottom: '5px',
    paddingLeft: '17px',
    // fontSize: '0.8em',
    border: 'none',
    textAlign: 'center',
    color: '#3E5060',
};

const secondRowStyle = {
    // fontSize: '1.4em', 
    top: 69, 
    // paddingTop: '2px', 
    // paddingBottom: '10px',
    border: 'none',
    textAlign: 'center',
    color: '#3E5060',
};

export default function OverlayCalendar(props) {
    const thePickedDate = props.pickedDate ? props.pickedDate : new Date();
    const start = startOfWeek(thePickedDate);
    const end = endOfWeek(thePickedDate);

    const getDatesBetween = (start, end) => {
        let dates = [];
        const currentDate = new Date(start);
        while (currentDate < end) {
            dates = [...dates, new Date(currentDate)];
            currentDate.setDate(currentDate.getDate() + 1);
        } 
        return dates;
    };

    const dates = getDatesBetween(start, end).map( date => date.getDate());
    
    const columns = [
        { id: 'sun', label: dates[0], width: '145px', minWidth: '35px' },
        { id: 'mon', label: dates[1], width: '145px', minWidth: '35px' },
        { id: 'tue', label: dates[2], width: '145px', minWidth: '35px' },
        { id: 'wed', label: dates[3], width: '145px', minWidth: '35px' },
        { id: 'thu', label: dates[4], width: '145px', minWidth: '35px' },
        { id: 'fri', label: dates[5], width: '145px', minWidth: '35px' },
        { id: 'sat', label: dates[6], width: '145px', minWidth: '35px' },
    ];
      
    return (  
        <TableContainer sx={{ 
          width: '100%',
          height: '100%',
          position: 'sticky', 
          top: 0, 
          left: '50px', 
          buttom: 0,
          right: 0,
          zIndex: 100, 
          opacity: 1,
        }}> 
        <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ height: '120px',  maxHeight: '120px'}}>
            <TableRow>
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
            </TableHead>
            <TableBody>
                <TableRow>
                {columns.map((column) => {
                    return (
                    <TableCell 
                        key={column.id} 
                        align={column.first ? 'right' : 'left'} 
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
    );
}