import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import TaskDateTimePicker from './TaskDateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

export default function TaskForm() {
  const [value, setValue] = React.useState(new Date());
  return (
    <Box
      component="form"
      sx={{
       '& .MuiTextField-root': { m: 2, width: '40ch' },
      }}
    >
        <FormControl>
          <TextField
            // autoFocus
            margin="dense"
            id="taskTitle"
            label="Add title"
            fullWidth
            variant="standard"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
            //   label="Choose a day"
              value={value}
              minDate={new Date('2022-01-01')}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            //   renderInput={(params) => <TextField {...params} />}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box sx={{ 
                    width: '45%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    }}>
                  {InputProps?.endAdornment}
                  <input ref={inputRef} {...inputProps} style={{ marginLeft: '8px' }} />
                </Box>
              )}
            />
          </LocalizationProvider>
          <TextField
            label="Add description"
            variant="filled"
            multiline
            rows={6}
          />
        </FormControl>
    </Box>
  );
}