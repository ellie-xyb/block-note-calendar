import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TaskForm from './TaskForm';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
}

export default function NewTaskDialog(props) {
    return (
        <Dialog
            open={props.dialogOpen}
            onClose={props.handleDialogClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
            >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Create task
            </DialogTitle>
            <DialogContent>
                <TaskForm/>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleDialogClose}>Cancel</Button>
                <Button onClick={props.handleDialogClose}>Save</Button>
            </DialogActions>
        </Dialog>
    );    
}    