import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function TaskShow(props) {
  return (
      <Dialog
        open={props.taskOpen}
        onClose={props.handleTaskClose}
        aria-labelledby="task-detail"
        aria-describedby="task-detail"
      >
        <DialogTitle id="task-title">
          {"task title"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="task-detail">
            Task detail
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleTaskClose}>Disagree</Button>
          <Button onClick={props.handleTaskClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  );
}
