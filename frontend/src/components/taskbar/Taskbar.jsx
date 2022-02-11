import * as React from 'react';
import DemoCalendar from './Calendar';
import Thetab from './Thetab';

const taskbarStyle = {
    backgroundColor: '#FFFFFF',
    color: '#282C34',
    width: '380px',
    minWidth: '380px',
    overflow: 'scroll',
  };

export default function Taskbar(props) {
  return (
    <div style={taskbarStyle}>
      <DemoCalendar setPickedDate={props.setPickedDate} />
      <Thetab 
        handleCellDialogOpen={props.handleCellDialogOpen}
        setSelectDateTime={props.setSelectDateTime}
        taskChipData={props.taskChipData}
      />
    </div>
  );
}