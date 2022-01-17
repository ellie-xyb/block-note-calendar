import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Taskbar from './components/taskbar/Taskbar';
import NoteCalendar from './components/notecalendar/NoteCalendar';


function App() {
  const [pickedDate, setPickedDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; 

  const mainContentStyle = {
    display: 'flex',
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
  };

  const noteCalendarStyle = {
    flex: '1 1 auto',
    position: 'relative',
    overflow: 'scroll',
    height: '90vh',
  }

  return (
    <div className="App">
      <Topbar></Topbar>
      <div style={mainContentStyle}>
        <Taskbar 
          setPickedDate={setPickedDate}
          open={open}
          setOpen={setOpen}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        >
        </Taskbar>
        <div style={noteCalendarStyle}>
          <NoteCalendar pickedDate={pickedDate}></NoteCalendar>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
