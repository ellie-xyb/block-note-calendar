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
import APIService from '../APIService';
import {useCookies} from 'react-cookie';

function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-new-task-create-dialog"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
}

export default function NewTaskDialog(props) {
  const [newTitle, setNewTitle] = React.useState('');
  const [newContent, setNewContent] = React.useState('');
  const [token] = useCookies(['mytoken']);

  const insertTask = () => {
    APIService.InsertTask({"title": newTitle, "content": newContent}, token['mytoken'])
    .then(() => {
      props.updateTasks()
      props.handleTaskDialogClose()
    })
    .catch(error => console.log(`-4- ${error} -4-`))
  }

  return (
    <Dialog
        open={props.taskDialogOpen}
        onClose={props.handleTaskDialogClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-new-task-create-dialog"
        >
        <DialogTitle 
          sx={{
            p: 0,
            m: 0,
          }}
          style={{ cursor: 'move' }} 
          id="draggable-new-task-create-dialog"
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
              <IconButton aria-label="close-task-form" size="medium" onClick={props.handleTaskDialogClose}>
                  <CloseOutlinedIcon />
              </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
            <TaskForm setNewTitle={setNewTitle} setNewContent={setNewContent} />
        </DialogContent>
        <DialogActions sx={{ m: 3, mt: 0 }}>
            <Button variant="contained" onClick={insertTask}>Create</Button>
        </DialogActions>
    </Dialog>
  );    
}    