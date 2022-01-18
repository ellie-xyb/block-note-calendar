import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Tasks() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '42%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="0"
          id="filled-size-small"
          defaultValue="coming soon..."
          variant="filled"
          size="small"
        />
        <TextField
          label="0"
          id="filled-size-small"
          defaultValue="gym"
          variant="filled"
          size="small"
        />
        <TextField
          label="0"
          id="filled-size-small"
          defaultValue="coding"
          variant="filled"
          size="small"
        />
        <TextField
          label="0"
          id="filled-size-small"
          defaultValue="shopping"
          variant="filled"
          size="small"
        />
      </div>    
    </Box>
  );
}
