import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
import TaskDateTimePicker from './TaskDateTimePicker';

export default function TaskForm() {
  return (
    <FormControl>
        <TextField
        // autoFocus
        margin="dense"
        id="taskTitle"
        label="Add title"
        fullWidth
        variant="standard"
    />
    <TaskDateTimePicker />
    </FormControl>
  );
}