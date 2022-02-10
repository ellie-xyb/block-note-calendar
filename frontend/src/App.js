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

  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/api/users/21/tasks/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token fd46d474a1c50e86f67b7cc969d1351edb63f47c'
      }
    })
      .then(resp => resp.json())
      .then(resp => setTaskChipData(resp))
      .catch(error => console.log(`------------------- ${error} ------------------`))
  }, []);

    // {id: 0, title: 'gym', content: 'I love gym'},
    // {id: 1, title: 'coding', content: 'I love coding'},
    // {id: 2, title: 'cooking', content: 'I love cooking'},
    // {id: 3, title: 'movie', content: 'I love movie'},
  // ]);

  const [cells, setCells] = React.useState([
    {id: 0, taskId: 0, start_datetime: new Date('2022-02-01T08:00:00+0900'), end_datetime: new Date('2022-02-01T11:00:00+0900') },
    {id: 1, taskId: 1, start_datetime: new Date('2022-02-07T09:00:00+0900'), end_datetime: new Date('2022-02-07T13:00:00+0900') },
    {id: 2, taskId: 1, start_datetime: new Date('2022-02-08T09:00:00+0900'), end_datetime: new Date('2022-02-08T11:00:00+0900') },
    {id: 3, taskId: 1, start_datetime: new Date('2022-02-09T09:00:00+0900'), end_datetime: new Date('2022-02-09T14:00:00+0900') },
    {id: 4, taskId: 1, start_datetime: new Date('2022-02-10T09:00:00+0900'), end_datetime: new Date('2022-02-10T14:00:00+0900') },
    {id: 5, taskId: 1, start_datetime: new Date('2022-02-12T09:00:00+0900'), end_datetime: new Date('2022-02-12T10:00:00+0900') },
    {id: 6, taskId: 1, start_datetime: new Date('2022-02-06T12:00:00+0900'), end_datetime: new Date('2022-02-06T13:00:00+0900') },
    {id: 7, taskId: 1, start_datetime: new Date('2022-02-08T14:00:00+0900'), end_datetime: new Date('2022-02-08T15:00:00+0900') },
    {id: 8, taskId: 1, start_datetime: new Date('2022-02-09T13:00:00+0900'), end_datetime: new Date('2022-02-09T14:00:00+0900') },
    {id: 9, taskId: 1, start_datetime: new Date('2022-01-30T12:00:00+0900'), end_datetime: new Date('2022-01-30T13:00:00+0900') },
    {id: 10, taskId: 1, start_datetime: new Date('2022-02-04T10:00:00+0900'), end_datetime: new Date('2022-02-04T11:00:00+0900') },
    {id: 11, taskId: 1, start_datetime: new Date('2022-02-05T10:00:00+0900'), end_datetime: new Date('2022-02-05T11:00:00+0900') },
    {id: 12, taskId: 1, start_datetime: new Date('2022-02-07T09:00:00+0900'), end_datetime: new Date('2022-02-07T10:00:00+0900') },
    {id: 13, taskId: 1, start_datetime: new Date('2022-02-03T09:00:00+0900'), end_datetime: new Date('2022-02-03T10:00:00+0900') },
    {id: 14, taskId: 1, start_datetime: new Date('2022-01-30T09:00:00+0900'), end_datetime: new Date('2022-01-30T10:00:00+0900') },
    {id: 15, taskId: 1, start_datetime: new Date('2022-01-30T09:00:00+0900'), end_datetime: new Date('2022-01-30T10:00:00+0900') },
    {id: 16, taskId: 1, start_datetime: new Date('2022-02-02T14:00:00+0900'), end_datetime: new Date('2022-02-02T15:00:00+0900') },
    {id: 17, taskId: 1, start_datetime: new Date('2022-02-01T12:00:00+0900'), end_datetime: new Date('2022-02-01T13:00:00+0900') },
    {id: 18, taskId: 1, start_datetime: new Date('2022-02-01T08:00:00+0900'), end_datetime: new Date('2022-02-01T09:00:00+0900') },
    {id: 19, taskId: 1, start_datetime: new Date('2022-02-01T13:00:00+0900'), end_datetime: new Date('2022-02-01T16:00:00+0900') },
    {id: 19, taskId: 1, start_datetime: new Date('2022-02-08T02:00:00+0900'), end_datetime: new Date('2022-02-08T04:00:00+0900') },
  ]);

  // const handleDeleteTaskChip = (taskChipToDelete) => () => {
  //   setTaskChipData((chips) => chips.filter((chip) => chip.id != taskChipToDelete.id));
  // };

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
              // handleDeleteTaskChip={handleDeleteTaskChip}
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
