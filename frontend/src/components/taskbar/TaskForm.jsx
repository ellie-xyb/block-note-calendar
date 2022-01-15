import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TaskForm() {
  return (
    <TextField
        // autoFocus
        margin="dense"
        id="taskTitle"
        label="Add title"
        fullWidth
        variant="standard"
    />
  );
}