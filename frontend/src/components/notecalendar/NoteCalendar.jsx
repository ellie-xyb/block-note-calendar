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
import TaskChip from './TaskChip';

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

export default function NoteCalendar(props) {
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
        { id: 'time', label: '', width: 40, first: true },
        { id: 'sun', label: dates[0], width: 145  },
        { id: 'mon', label: dates[1], width: 145  },
        { id: 'tue', label: dates[2], width: 145  },
        { id: 'wed', label: dates[3], width: 145  },
        { id: 'thu', label: dates[4], width: 145  },
        { id: 'fri', label: dates[5], width: 145  },
        { id: 'sat', label: dates[6], width: 145  },
    ];
      
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
                            // onClick={props.handleClickOpen}
                            onClick={
                                function(e){
                                    console.log(e);
                                  }
                            }
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
                            {/* <TaskChip taskChipData={props.taskChipData} handleDeleteTaskChip={props.handleDeleteTaskChip} /> */}
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