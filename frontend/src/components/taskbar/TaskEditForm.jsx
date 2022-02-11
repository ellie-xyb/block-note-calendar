import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import NotesIcon from '@mui/icons-material/Notes';


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
            hiddenLabel
            margin="dense"
            id="current-task-Title"
            fullWidth
            variant="standard"
            defaultValue={props.selectedTaskTitle}
          /> 
          <div style={{ display: 'flex', alignItems: 'flex-start', width: '94%', marginTop: '10px' }} >
            <NotesIcon sx={{ color: '#5f6368', fontSize: '20px', ml: 2, mt: 2 }} />
            <TextField
                hiddenLabel
                defaultValue={props.selectedTaskContent}
                variant="filled"
                multiline
                rows={6}
            />
          </div>   
        </FormControl>
    </Box>
  );
}