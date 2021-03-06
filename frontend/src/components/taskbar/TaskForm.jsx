import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function TaskForm(props) {
  return (
    <Box
      component="form"
      sx={{ 
       '& .MuiTextField-root': { m: 2, width: '40ch' },
      }}
    >
        <FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="taskTitle"
            label="Add task title"
            fullWidth
            variant="standard"
            onChange = {e => props.setNewTitle(e.target.value) }
          />
          <TextField
            label="Add description"
            variant="filled"
            multiline
            rows={6}
            onChange = {e => props.setNewContent(e.target.value) }
          />
        </FormControl>
    </Box>
  );
}