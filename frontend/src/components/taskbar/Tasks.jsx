import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Tasks() {
  return (
    <Box
      component="form"
      sx={{ 
        '& > :not(style)': { p: 1, width: '43%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Task 1" variant="outlined" />
      <TextField id="outlined-basic" label="Task 2" variant="outlined" />
      <TextField id="outlined-basic" label="Task 3" variant="outlined" />
      <TextField id="outlined-basic" label="Task 4" variant="outlined" />
      <TextField id="outlined-basic" label="Task 5" variant="outlined" />
      <TextField id="outlined-basic" label="Task 6" variant="outlined" />
      <TextField id="outlined-basic" label="Task 7" variant="outlined" />
      <TextField id="outlined-basic" label="Task 8" variant="outlined" />
      <TextField id="outlined-basic" label="Task 9" variant="outlined" />
      <TextField id="outlined-basic" label="+" variant="outlined" />
    </Box>
  );
}
