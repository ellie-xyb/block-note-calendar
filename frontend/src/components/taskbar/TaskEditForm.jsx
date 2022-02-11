import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function TaskEditForm(props) {
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
            id="current-task-Title"
            label="current title"
            fullWidth
            variant="standard"
          />
          <TextField
            label="current description"
            variant="filled"
            multiline
            rows={6}
          />
        </FormControl>
    </Box>
  );
}