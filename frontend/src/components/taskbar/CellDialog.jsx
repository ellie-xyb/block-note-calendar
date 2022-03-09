import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CellForm from './CellForm';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import APIService from '../APIService';

function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-new-cell-create-dialog"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
}

export default function NewCellDialog(props) {
    const [cellTaskId, setCellTaskId] = React.useState();

    const insertCell = () => {
      APIService.InsertCell({"start_datetime": props.selectDateTime.start, "end_datetime": props.selectDateTime.end, "task": cellTaskId}, props.token['mytoken'])
      .then(() => {
        let month = props.selectDateTime.start.getMonth() + 1;
        let day = props.selectDateTime.start.getDate();
        let year = props.selectDateTime.start.getFullYear();
        let path = year + '/' + month + '/' + day + '/'; 
        props.updateCells(path)
        props.handleCellDialogClose()
        // console.log(path)
      })
      .catch(error => console.log(`-5cell- ${error} -5cell-`))
    }

    return (
        <Dialog
            open={props.cellDialogOpen}
            onClose={props.handleCellDialogClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-new-cell-create-dialog"
            >
            <DialogTitle 
              sx={{
                p: 0,
                m: 0,
              }}
              style={{ cursor: 'move' }} 
              id="draggable-new-cell-create-dialog"
            >
                <Box
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'flex-end', 
                    p: 0,
                    mb: 3, 
                    color: '#5f6368',
                    backgroundColor: '#f1f3f4',
                  }} 
                >
                    <IconButton aria-label="close-cell-form" size="medium" onClick={props.handleCellDialogClose}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <CellForm 
                    selectDateTime={props.selectDateTime} 
                    setSelectDateTime={props.setSelectDateTime}
                    taskChipData={props.taskChipData}
                    setCellTaskId={setCellTaskId}
                    existCell={props.existCell}
                />
            </DialogContent>
            <DialogActions sx={{ m: 3 }}>
                <Button variant="contained" onClick={insertCell}>Save</Button>
            </DialogActions>
        </Dialog>
    );    
}    