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
    const [cellDate, setCellDate] = React.useState('');
    const [cellStartTime, setCellStartTime] = React.useState('');
    const [cellEndTime, setCellEndTime] = React.useState('');
    const [cellTaskId, setCellTaskId] = React.useState();

    // const insertTask = () => {
    //   APIService.InsertTask({"title": newTitle, "content": newContent}, props.token['mytoken'])
    //   .then(() => {
    //     props.updateTasks()
    //     props.handleTaskDialogClose()
    //   })
    //   .catch(error => console.log(`-4- ${error} -4-`))
    // }

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
                    setCellDate={setCellDate}
                    setCellStartTime={setCellStartTime}
                    setCellEndTime={setCellEndTime}
                    setCellTaskId={setCellTaskId}
                />
            </DialogContent>
            <DialogActions sx={{ m: 3 }}>
                <Button variant="contained" onClick={props.handleCellDialogClose}>Save</Button>
            </DialogActions>
        </Dialog>
    );    
}    