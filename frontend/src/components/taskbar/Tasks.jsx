import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

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
              <OutlinedInput
                id="filled-size-small"
                defaultValue={taskChip.title}
                variant="filled"
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="edit task"
                      onClick={props.handleTaskEditDialogOpen}
                      edge="end"
                    >
                      <ModeEditOutlineOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
             />
            </Grid> 
          )
        }
      </Grid>
    </Box>
  );
}
