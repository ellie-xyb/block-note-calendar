import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import {TimeRows} from "./TimeRows";

const column = { key: 'time', label: 'GMT+09' };
const rows = TimeRows;

export default function TimeTable() {    
    return (  
        <TableContainer
        style={{
          zIndex: 500,
        }}>  
        <Table>
            <TableHead>  
            <TableRow>
                <TableCell 
                  style={{
                    height: '110px',
                    textAlign: 'left',
                    fontSize: '0.72em',  
                    border: 'none',
                    color: '#3E5060',
                    padding: 0,
                    verticalAlign: 'bottom',
                    paddingBottom: '10px',
                    boxSizing: 'border-box',
                  }}
                >
                  {column.label}
                </TableCell>
            </TableRow> 
            </TableHead>
            <TableBody>
            {rows.map((row) => {
                const value = row.timeTitle;
                return (
                    <TableRow key={row.id}>
                        <TableCell 
                            key={column.key} 
                            style={{
                            height: '55px',
                            borderBottom: '0.5px solid white',
                            borderRight: '0.5px solid white',
                            fontSize: '0.7em',
                            color: '#6F7E8C',
                            padding: 0,
                            textAlign: 'center',
                            boxSizing: 'border-box',
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