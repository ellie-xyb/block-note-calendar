import * as React from 'react';
import DemoCalendar from './Calendar';
import Thetab from './Thetab';

export default function Taskbar(props) {
  const taskbarStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    color: '#282C34',
    width: '350px',
    overflow: 'scroll',
    position: 'relative',
    zIndex: 0,
    height: '90vh',
  };

  return (
    <div style={taskbarStyle}>
      <DemoCalendar setPickedDate={props.setPickedDate}></DemoCalendar>
      <Thetab></Thetab>
    </div>
  );
}