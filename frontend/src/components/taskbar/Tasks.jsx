import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Tasks(props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '100%' },
        flexGrow: 1,
      }}
      noValidate
      autoComplete="off"
    >

      <Grid container spacing={{ xs: 2 }}>
        {props.taskChipData
          .map((taskChip) => 
            <Grid item xs={6} key={taskChip.id}>
              <TextField
                label="0"
                id="filled-size-small"
                defaultValue={taskChip.title}
                variant="filled"
                size="small"
             />
            </Grid> 
          )
        }
      </Grid>
    </Box>
  );
}
