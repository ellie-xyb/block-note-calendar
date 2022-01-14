import Calendar from './Calendar';

function Taskbar() {
    const taskbarStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        color: '#282C34',
        width: '300px',
        overflowX: 'hidden',
        overflowY: 'scroll',
      };

    //   const linkStyle = {
    //       paddingLeft: '15px',
    //       color: 'white',
    //       textDecoration: 'none',
    //   }
  return (
    <div style={taskbarStyle}>
        <Calendar></Calendar>
        <p>Task</p>
        <p>History</p>            
    </div>
  );
}

export default Taskbar;
