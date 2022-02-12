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
      <div style={{ maxHeight: '300px', overflow: 'hidden' }}>
        <DemoCalendar setPickedDate={props.setPickedDate} />
      </div>
      <Thetab 
        handleTaskDialogOpen={props.handleTaskDialogOpen}
        handleTaskEditDialogOpen={props.handleTaskEditDialogOpen}
        taskChipData={props.taskChipData}
      />
    </div>
  );
}