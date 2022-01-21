import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Taskbar from './components/taskbar/Taskbar';
import NewTaskDialog from './components/taskbar/AddTaskDialog';
import ReactCursorPosition from 'react-cursor-position';
import BgCalendar from './components/notecalendar/BgCalendar.jsx';
import TimeTable from './components/notecalendar/TimeTable.jsx';
import OverlayCalendar from './components/notecalendar/OverlayCalendar';

function App() {
  const [pickedDate, setPickedDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [taskChipData, setTaskChipData] = React.useState([
    {id: 0, title: 'gym', datetime: '10:00am'},
    {id: 1, title: 'coding', datetime: '12:00am'},
    {id: 2, title: 'cooking', datetime: '5:00pm'},
    {id: 3, title: 'movie', datetime: '9:00am'},
  ]);

  const handleDeleteTaskChip = (taskChipToDelete) => () => {
    setTaskChipData((chips) => chips.filter((chip) => chip.id != taskChipToDelete.id));
  };

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
    height: '90vh',
    boxSizing: 'border-box',
  };

  const insideMainCalendarStyle = {
    flex: '1 1 0',
    display: 'flex',
    position: 'relative',
    height: '90vh',
    overFlow: 'scroll',
  };

  const timeTableStyle = {
    height: '90vh',
    width: '100px',
    // position: 'relative',
    // top: 0, 
    // left: 0, 
    // buttom: 0,
    // right: 0,
    // zIndex: 100, 
  };

  return (
    <div className="App">
      <Topbar></Topbar>
      <div style={mainContentStyle}>
        <Taskbar 
          setPickedDate={setPickedDate}
          handleClickOpen={handleClickOpen}
        >
        </Taskbar>
        <div style={insideMainCalendarStyle}>
          <TimeTable style={timeTableStyle} />
          <BgCalendar />
          {/* <OverlayCalendar 
            pickedDate={pickedDate}
            handleClickOpen={handleClickOpen}
          /> */}
        </div>  
      </div>
      <NewTaskDialog open={open} handleClose={handleClose} />
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
