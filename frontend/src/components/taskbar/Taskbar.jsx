import Calendar from './Calendar';
import Thetab from './Thetab';

function Taskbar() {
  const taskbarStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    color: '#282C34',
    width: '350px',
    overflow: 'scroll',
    position: 'relative',
    zIndex: '0',
    height: '90vh',
  }
  
  return (
    <div style={taskbarStyle}>
      <Calendar></Calendar>
      <Thetab></Thetab>
    </div>
  );
}

export default Taskbar;