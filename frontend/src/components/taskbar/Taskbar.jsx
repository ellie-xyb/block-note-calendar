import * as React from 'react';
import DemoCalendar from './Calendar';
import Thetab from './Thetab';
import AddNewTask from './AddNewTask';

const taskbarStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    color: '#282C34',
    width: '380px',
    overflow: 'scroll',
    position: 'relative',
    zIndex: 0,
  };

export default function Taskbar(props) {
  return (
    <div style={taskbarStyle}>
      <DemoCalendar setPickedDate={props.setPickedDate} />
      {/* <AddNewTask handleClickOpen={props.handleClickOpen} /> */}
      <Thetab />
    </div>
  );
}