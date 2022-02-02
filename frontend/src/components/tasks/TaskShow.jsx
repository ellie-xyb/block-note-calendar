import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function TaskShow(props) {
  const currentCellId = props.pickedCellId;
  return (
      <Dialog
        hideBackdrop={true}
        open={props.cellOpen}
        onClose={props.handleCellClose}
        aria-labelledby="task-detail"
        aria-describedby="task-detail"
        style={{
            boxShadow: '0px 1px 9px -7px rgb(0 0 0 / 20%), 0px 9px 20px 3px rgb(0 0 0 / 14%), 0px 0px 46px 8px rgb(0 0 0 / 12%)',
        }}
      >
        <DialogTitle id="task-title">
            {currentCellId}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="task-detail">
            Task detail
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCellClose}>Disagree</Button>
          <Button onClick={props.handleCellClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  );
}
