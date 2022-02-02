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
        hideBackdrop={true}
        open={props.taskOpen}
        onClose={props.handleTaskClose}
        aria-labelledby="task-detail"
        aria-describedby="task-detail"
        style={{
            boxShadow: '0px 1px 9px -7px rgb(0 0 0 / 20%), 0px 9px 20px 3px rgb(0 0 0 / 14%), 0px 0px 46px 8px rgb(0 0 0 / 12%)',
        }}
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
