import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function TaskShow(props) {
    // find the current cell by the cell id
    let cell = props.cells.find(x => x.id === props.pickedCellId);
    let task = props.taskChipData[cell.taskId];
    let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    
    return (
      <Dialog
        hideBackdrop={true}
        open={props.cellOpen}
        onClose={props.handleCellClose}
        aria-labelledby="task-detail"
        aria-describedby="task-detail"
        style={{
            boxShadow: '0px 1px 9px -7px rgb(0 0 0 / 20%), 0px 9px 20px 3px rgb(0 0 0 / 14%), 0px 0px 46px 8px rgb(0 0 0 / 12%)',
        }}
      >
        <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 1, mr:1, color: '#5f6368'}} >
            <IconButton aria-label="edit-task" size="medium">
                <ModeEditOutlineOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete-task" size="medium">
                <DeleteOutlinedIcon />
            </IconButton>
            <IconButton aria-label="close-task" size="medium" onClick={props.handleCellClose}>
                <CloseOutlinedIcon />
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', m: 3, mb: 9, width: '400px' }}>
            <Typography 
              component="div" 
              sx={{color: '#3c4043',
              fontSize: '22px',
              fontWeight: '400',
            }}>
                {task.title}
            </Typography>
            <Typography 
              component="div" 
              mt={1} 
              sx={{color: '#3c4043',
              fontSize: '14px',
              fontWeight: '400',
              letterSpacing: '.2px',
            }}>
                {cell.start_datetime.toLocaleDateString("en-US", options)}
                {', ' + cell.start_datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' ー '} 
                {cell.end_datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} 
            </Typography> 
        </Box>  
      </Dialog>
  );
}
