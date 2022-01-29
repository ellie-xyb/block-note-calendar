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
    {id: 0, title: 'gym', content: ''},
    {id: 1, title: 'coding', content: ''},
    {id: 2, title: 'cooking', content: ''},
    {id: 3, title: 'movie', content: ''},
  ]);

  const [cells, setCells] = React.useState([
    {id: 0, taskId: 0, datetime: new Date('2022-02-01T08:00:00+0900')},
    {id: 1, taskId: 1, datetime: new Date('2022-01-29T06:00:00+0900')},
    {id: 2, taskId: 2, datetime: new Date('2022-02-02T09:00:00+0900')},
    {id: 3, taskId: 3, datetime: new Date('2022-02-03T10:00:00+0900')},
    {id: 4, taskId: 3, datetime: new Date('2022-02-04T10:00:00+0900')},
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
          taskChipData={taskChipData}
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
