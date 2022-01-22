import * as React from 'react';
import DemoCalendar from './Calendar';
import Thetab from './Thetab';
import AddNewTask from './AddNewTask';

const taskbarStyle = {
    backgroundColor: '#FFFFFF',
    color: '#282C34',
    width: '380px',
    overflow: 'scroll',
    zIndex: 0,
  };

export default function Taskbar(props) {
  return (
    <div style={taskbarStyle}>
      <DemoCalendar setPickedDate={props.setPickedDate} />
      {/* <AddNewTask handleClickOpen={props.handleClickOpen} /> */}
      <Thetab handleClickOpen={props.handleClickOpen}/>
    </div>
  );
}