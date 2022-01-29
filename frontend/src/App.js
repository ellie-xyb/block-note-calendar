import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Taskbar from './components/taskbar/Taskbar';
import NewTaskDialog from './components/taskbar/AddTaskDialog';
import ReactCursorPosition from 'react-cursor-position';
import BgCalendar from './components/notecalendar/BgCalendar';
import TimeTable from './components/notecalendar/TimeTable';
import OverlayDivs from './components/notecalendar/OverlayDivs';

function App() {
  const [pickedDate, setPickedDate] = React.useState(new Date());
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const [taskChipData, setTaskChipData] = React.useState([
    {id: 0, title: 'gym', datetime: '10:00am'},
    {id: 1, title: 'coding', datetime: '12:00am'},
    {id: 2, title: 'cooking', datetime: '5:00pm'},
    {id: 3, title: 'movie', datetime: '9:00am'},
  ]);

  const [selectDateTime, setSelectDateTime] = React.useState({
    start: new Date(),
    end: new Date(),
  });

  const handleDeleteTaskChip = (taskChipToDelete) => () => {
    setTaskChipData((chips) => chips.filter((chip) => chip.id != taskChipToDelete.id));
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  }; 

  const mainContentStyle = {
    display: 'flex',
    width: '100%',
    height: '90vh',
    boxSizing: 'border-box',
  };

  const insideMainCalendarStyle = {
    maxHeight: '90vh',
    width: 'calc(100% - 380px)',
    overflow: 'scroll',
    position: 'relative',
  };

  const TimeTableStyle = {
    width: '65px',
    position: 'absolute',
    left: 0,
  };

  const CalendarStyle = {
    position: 'absolute',
    left: '65px',
    maxWidth: 'calc(100% - 65px)',
    minWidth: 'calc(100% - 65px)',
  };

  const OverlayDivsStyle = {
    minWidth: '525px',
    width: 'calc(100% - 65px)',
    position: 'absolute',
    top: 0,
    left: '65px',
  };

  return (
    <div className="App">
      <Topbar></Topbar>
      <div style={mainContentStyle}>
        <Taskbar 
          setPickedDate={setPickedDate}
          handleDialogOpen={handleDialogOpen}
          setSelectDateTime={setSelectDateTime}
        >
        </Taskbar>
        <div style={insideMainCalendarStyle}>
          <div style={TimeTableStyle}><TimeTable /></div>
          <div style={CalendarStyle}><BgCalendar /></div>
          <div style={OverlayDivsStyle}>
            <OverlayDivs 
              pickedDate={pickedDate}
              handleDialogOpen={handleDialogOpen}
              setSelectDateTime={setSelectDateTime}
            />
          </div>
        </div>  
      </div>
      <NewTaskDialog 
        dialogOpen={dialogOpen} 
        selectDateTime={selectDateTime}
        setSelectDateTime={setSelectDateTime}
        handleDialogClose={handleDialogClose} 
      />
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
