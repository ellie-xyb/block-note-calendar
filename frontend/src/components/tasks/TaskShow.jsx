import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import NotesIcon from '@mui/icons-material/Notes';
import EventIcon from '@mui/icons-material/Event';
import APIService from '../APIService';

export default function TaskShow(props) {
  // find the current cell by the cell id
  let cell = props.cells.find(x => x.id === props.pickedCellId);
  let task = cell && props.taskChipData.find(x => x.id === cell.task);
  let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  
  const deleteCell = (id, start_datetime) => {
    APIService.DeleteCell(id, props.token['mytoken'])
    .then(() => {
      let month = start_datetime.getMonth() + 1;
      let day = start_datetime.getDate();
      let year = start_datetime.getFullYear();
      let path = year + '/' + month + '/' + day + '/'; 
      console.log(path)
      props.updateCells(path)
      props.handleCellClose()
    })
  }

  return (
    <>
      { cell && task && 
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
          <Box sx={{ width: '480px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, mr:1, color: '#5f6368' }} >
                <IconButton aria-label="edit-cell" size="medium">
                    <ModeEditOutlineOutlinedIcon />
                </IconButton>
                <IconButton aria-label="delete-cell" size="medium" onClick={() => {deleteCell(cell.id, cell.start_datetime)}}>
                    <DeleteOutlinedIcon />
                </IconButton>
                <IconButton aria-label="close-cell" size="medium" onClick={props.handleCellClose}>
                    <CloseOutlinedIcon />
                </IconButton>
            </Box>
            <Box sx={{ m: 2, ml: 9, mb:3 }}>
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
            <Box sx={{ mx: 2, my: 1, display: 'flex' }}>
                <NotesIcon sx={{ color: '#5f6368', fontSize: '20px', pl: 2.5, pr: 2 }} />
                <Typography 
                  component="div" 
                  sx={{color: '#3c4043',
                  fontSize: '15px',
                  fontWeight: '400',
                  letterSpacing: '.2px',
                }}>
                    {task.content}
                </Typography>
            </Box>
            <Box sx={{ mx: 2, mb: 4, display: 'flex' }}>
                <EventIcon sx={{ color: '#5f6368', fontSize: '20px', pl: 2.5, pr: 2 }} />
                <Typography 
                  component="div" 
                  sx={{color: '#3c4043',
                  fontSize: '15px',
                  fontWeight: '400',
                  letterSpacing: '.2px',
                }}>
                    Ellie
                </Typography>
            </Box>
          </Box>  
        </Dialog>
      }
    </>
  );
}
