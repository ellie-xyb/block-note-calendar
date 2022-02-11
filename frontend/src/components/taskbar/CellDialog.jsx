import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CellForm from './CellForm';
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

export default function NewCellDialog(props) {
    return (
        <Dialog
            open={props.cellDialogOpen}
            onClose={props.handleCellDialogClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
            >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Set date & time
            </DialogTitle>
            <DialogContent>
                <CellForm 
                    selectDateTime={props.selectDateTime} 
                    setSelectDateTime={props.setSelectDateTime}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCellDialogClose}>Cancel</Button>
                <Button onClick={props.handleCellDialogClose}>Save</Button>
            </DialogActions>
        </Dialog>
    );    
}    