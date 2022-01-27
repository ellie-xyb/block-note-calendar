import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import TaskDateTimePicker from './TaskDateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TimePicker from '@mui/lab/TimePicker';

export default function TaskForm(props) {
//   const [startDate, setStartDate] = React.useState(new Date());
//   const [startTime, setStartTime] = React.useState(new Date());
//   const [endTime, setEndTime] = React.useState(new Date());

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
              value={props.startDate}
              minDate={new Date('2022-01-01')}
              onChange={(newValue) => {
                props.setStartDate(newValue);
              }}
            //   renderInput={(params) => <TextField {...params} />}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginTop: '10px',
                    marginBottom: '25px',
                    marginLeft: '5px',
                    }}>
                  {InputProps?.endAdornment}
                  <input ref={inputRef} {...inputProps} style={{ marginLeft: '15px', width: '81.5%', height: '22px' }} />   
                </Box>
              )}
            />
            <Box sx={{
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-around',
              marginBottom: '8px',
              }}>

                <TimePicker
                label="Start at"
                value={props.startTime}
                onChange={(newValue) => {
                props.setStartTime(newValue);
                }}
                // renderInput={(params) => <TextField {...params} />}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        }}>
                    <small>From</small>
                    {InputProps?.endAdornment}
                    <input ref={inputRef} {...inputProps} style={{ marginLeft: '10px', width: '100px' }} />   
                    </Box>
                )}  
                />

                <TimePicker
                label="End at"
                value={props.endTime}
                onChange={(newValue) => {
                props.setEndTime(newValue);
                }}
                // renderInput={(params) => <TextField {...params} />}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        }}>     
                    <small>To</small>
                    {InputProps?.endAdornment}
                    <input ref={inputRef} {...inputProps} style={{ marginLeft: '10px', width: '100px' }} />   
                    </Box>
                )}  
                />  
            </Box>    
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