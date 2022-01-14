import Calendar from './Calendar';
import Thetab from './Thetab';

function Taskbar() {
  const taskbarStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    color: '#282C34',
    width: '300px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    position: 'relative',
    zIndex: 0,
  }
  
  return (
    <div style={taskbarStyle}>
      <Calendar></Calendar>
      <Thetab></Thetab>
    </div>);
}

export default Taskbar;
