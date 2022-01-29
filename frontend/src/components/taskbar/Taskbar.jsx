import * as React from 'react';
import DemoCalendar from './Calendar';
import Thetab from './Thetab';
import AddNewTask from './AddNewTask';

const taskbarStyle = {
    backgroundColor: '#FFFFFF',
    color: '#282C34',
    width: '380px',
    minWidth: '380px',
    overflow: 'scroll',
    zIndex: 0,
  };

export default function Taskbar(props) {
  return (
    <div style={taskbarStyle}>
      <DemoCalendar setPickedDate={props.setPickedDate} />
      {/* <AddNewTask handleDialogOpen={props.handleDialogOpen} /> */}
      <Thetab 
        handleDialogOpen={props.handleDialogOpen}
        setSelectDateTime={props.setSelectDateTime}
        taskChipData={props.taskChipData}
      />
    </div>
  );
}