import * as React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Taskbar from './components/taskbar/Taskbar';
import NewTaskDialog from './components/taskbar/AddTaskDialog';
import BgCalendar from './components/notecalendar/BgCalendar';
import TimeTable from './components/notecalendar/TimeTable';
import OverlayDivs from './components/notecalendar/OverlayDivs';
import TaskShow from './components/tasks/TaskShow';

function App() {
  const [pickedDate, setPickedDate] = React.useState(new Date());
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [cellOpen, setCellOpen] = React.useState(false);
  const [pickedCellId, setPickedCellId] = React.useState(0);
  const [taskChipData, setTaskChipData] = React.useState([]);
  const [cells, setCells] = React.useState([]);

  React.useEffect(() => {
    
    fetch('http://127.0.0.1:8000/api/users/1/tasks/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token e9eab7e0ce3b07946e73e1b434f2d229774b9a4b'
      }
    })
      .then(resp => resp.json())
      .then(resp => setTaskChipData(resp))
      .catch(error => console.log(`-1- ${error} -1-`))

    fetch('http://127.0.0.1:8000/api/users/1/2022/2/11/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token e9eab7e0ce3b07946e73e1b434f2d229774b9a4b'
      }
    })   
        .then(resp => resp.json())
        .then(resp => setCells(resp.map(c => {
          c.start_datetime = new Date(c.start_datetime)
          c.end_datetime = new Date(c.end_datetime)
          return c
        })))
        .catch(error => console.log(`-2-${error}-2-`))

  }, []);

  const [selectDateTime, setSelectDateTime] = React.useState({
    start: new Date(),
    end: new Date(),
  });

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  }; 

  const handleCellOpen = (id) => {
    setCellOpen(true);
    setPickedCellId(id);
  };

  const handleCellClose = () => {
    setCellOpen(false);
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
              handleCellOpen={handleCellOpen}
              setSelectDateTime={setSelectDateTime}
              taskChipData={taskChipData}
              cells={cells}
            />
          </div>
        </div>  
      </div>
      <NewTaskDialog 
        dialogOpen={dialogOpen} 
        handleDialogClose={handleDialogClose} 
        selectDateTime={selectDateTime}
        setSelectDateTime={setSelectDateTime}
      />
      <TaskShow
        cellOpen={cellOpen}
        handleCellClose={handleCellClose}
        pickedCellId={pickedCellId}
        cells={cells}
        taskChipData={taskChipData}
      />
    </div>
  );
}

export default App;
