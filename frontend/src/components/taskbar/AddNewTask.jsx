import * as React from 'react';
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export default function AddNewTask(props) {
//   const createBtnStyle = {
//     width: '80%',
//     display: 'flex',
//     justifyContent: 'left',
//     padding: '8px',
//   };

  const createBtnStyle = {
    width: '80%',
    display: 'flex',
    justifyContent: 'left',
    padding: '8px',
  };

  return (
    <div style = {createBtnStyle}>
      <Button 
        variant="outlined" 
        onClick={props.handleClickOpen}
        startIcon={<ControlPointIcon />}
      >
        Create task
      </Button>
    </div>
  );
}
