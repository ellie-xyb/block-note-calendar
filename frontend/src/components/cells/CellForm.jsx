import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TimePicker from '@mui/lab/TimePicker';
import Autocomplete from '@mui/material/Autocomplete';

export default function CellForm(props) {
  return (
    <Box
      component="form"
      sx={{
       '& .MuiTextField-root': { m: 2, width: '40ch' },
      }}
    >
        <FormControl>
          <Autocomplete
            autoFocus
            id="selected-task"
            options={props.taskChipData ? props.taskChipData.map(task => Object.assign({label: task.title}, task)) : [] }
            // options={props.taskChipData ? props.taskChipData.map(task => { return {label: task.title, ...task}}) : [] }
            fullWidth
            disableClearable
            sx={{ mb: 3 }}
            renderInput={(params) => <TextField {...params} label="Choose task"  autoFocus margin="dense" variant="standard"/>}
            onChange={(event, value) => props.setCellTaskId(value.id)}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
            //   label="Choose a day"
              value={props.selectDateTime.start}
              minDate={new Date('2022-01-01')}
              onChange={(newValue) => {
                let newEnd = props.selectDateTime.end
                newEnd.setYear(newValue.getFullYear())
                newEnd.setMonth(newValue.getMonth())
                newEnd.setDate(newValue.getDate())
                props.setSelectDateTime({...props.selectDateTime, start: newValue, end: newEnd});
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
                value={props.selectDateTime.start}
                onChange={(newValue) => {
                  props.setSelectDateTime({...props.selectDateTime, start: newValue})
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
                value={props.selectDateTime.end}
                onChange={(newValue) => {
                  props.setSelectDateTime({...props.selectDateTime, end: newValue});
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
        </FormControl>
    </Box>
  );
}