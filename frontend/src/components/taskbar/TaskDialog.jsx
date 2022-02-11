import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TaskForm from './TaskForm';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

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
            open={props.taskDialogOpen}
            onClose={props.handleTaskDialogClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
            >
            <DialogTitle 
              sx={{
                p: 0,
                m: 0,
              }}
              style={{ cursor: 'move' }} 
              id="draggable-dialog-title"
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
                    <IconButton aria-label="close-task" size="medium" onClick={props.handleTaskDialogClose}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <TaskForm />
            </DialogContent>
            <DialogActions sx={{ m: 3, mt: 0 }}>
                <Button variant="contained" onClick={props.handleTaskDialogClose}>Save</Button>
            </DialogActions>
        </Dialog>
    );    
}    