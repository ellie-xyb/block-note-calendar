function Taskbar() {
    const taskbarStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        color: '#282C34',
        width: '256px',
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
        <p>coming soon</p>
        <p>Task</p>
        <p>History</p>            
    </div>
  );
}

export default Taskbar;
