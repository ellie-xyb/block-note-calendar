import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TaskEditForm from './TaskEditForm';
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

export default function TaskEditDialog(props) {
    return (
        <Dialog
            open={props.taskEditDialogOpen}
            onClose={props.handleTaskEditDialogClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-task-edit-dialog"
            >
            <DialogTitle 
              sx={{
                p: 0,
                m: 0,
              }}
              style={{ cursor: 'move' }} 
              id="draggable-task-edit-dialog"
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
                    <IconButton aria-label="close-task-edit-form" size="medium" onClick={props.handleTaskEditDialogClose}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <TaskEditForm />
            </DialogContent>
            <DialogActions sx={{ m: 3, mt: 0 }}>
                <Button variant="contained" onClick={props.handleTaskDialogClose}>Save</Button>
            </DialogActions>
        </Dialog>
    );    
}    