import * as React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Taskbar from './components/taskbar/Taskbar';
import NewCellDialog from './components/taskbar/CellDialog';
import NewTaskDialog from './components/taskbar/TaskDialog';
import TaskEditDialog from './components/taskbar/TaskEditDialog'
import BgCalendar from './components/notecalendar/BgCalendar';
import TimeTable from './components/notecalendar/TimeTable';
import OverlayDivs from './components/notecalendar/OverlayDivs';
import TaskShow from './components/tasks/TaskShow';
import { useNavigate } from 'react-router-dom';


function App(props) {
  const [pickedDate, setPickedDate] = React.useState(new Date());
  const [cellDialogOpen, setCellDialogOpen] = React.useState(false);
  const [taskDialogOpen, setTaskDialogOpen] = React.useState(false);
  const [taskEditDialogOpen, setTaskEditDialogOpen] = React.useState(false);
  const [cellOpen, setCellOpen] = React.useState(false);
  const [pickedCellId, setPickedCellId] = React.useState(0);
  const [taskChipData, setTaskChipData] = React.useState([]);
  const [cells, setCells] = React.useState([]);
  const [selectedTaskId, setSelectedTaskId] = React.useState('')
  const [selectedTaskTitle, setSelectedTaskTitle] = React.useState('')
  const [selectedTaskContent, setSelectedTaskContent] = React.useState('')
  const navigate = useNavigate();

  function updateTasks() {
    fetch('http://127.0.0.1:8000/api/user/tasks/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${props.token['mytoken']}`
      }
    })
      .then(resp => resp.json())
      .then(resp => setTaskChipData(resp))
      .catch(error => console.log(`-1- ${error} -1-`))
  }

  function updateCells() {
    fetch('http://127.0.0.1:8000/api/user/2022/3/5/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${props.token['mytoken']}`
      }
    })   
        .then(resp => resp.json())
        .then(resp => setCells(resp.map(c => {
          c.start_datetime = new Date(c.start_datetime)
          c.end_datetime = new Date(c.end_datetime)
          console.log(c.start_datetime, c.end_datetime)
          return c
        })))
        .catch(error => console.log(`-2-${error}-2-`))
  }

  React.useEffect(() => {
    if(!props.token['mytoken'] || props.token['mytoken'] === 'undefined') {
      navigate('/signin/')
    } 

    updateTasks();
    updateCells();
  }, []);

  const [selectDateTime, setSelectDateTime] = React.useState({
    start: new Date(),
    end: new Date(),
  });

  const handleCellDialogOpen = () => {
    setCellDialogOpen(true);
  };

  const handleCellDialogClose = () => {
    setCellDialogOpen(false);
  }; 

  const handleTaskDialogOpen = () => {
    setTaskDialogOpen(true);
  };

  const handleTaskDialogClose = () => {
    setTaskDialogOpen(false);
  }; 

  const handleTaskEditDialogOpen = (id, title='', content='') => {
    setSelectedTaskId(id);
    setSelectedTaskTitle(title);
    setSelectedTaskContent(content);
    setTaskEditDialogOpen(true);
  };

  const handleTaskEditDialogClose = () => {
    setTaskEditDialogOpen(false);
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
      <Topbar isSignIn={props.isSignIn} setSignIn={props.setSignIn} removeToken={props.removeToken}></Topbar>
      <div style={mainContentStyle}>
        <Taskbar 
          setPickedDate={setPickedDate}
          handleTaskDialogOpen={handleTaskDialogOpen}
          handleTaskEditDialogOpen={handleTaskEditDialogOpen}
          taskChipData={taskChipData}
        >
        </Taskbar>
        <div style={insideMainCalendarStyle}>
          <div style={TimeTableStyle}><TimeTable /></div>
          <div style={CalendarStyle}><BgCalendar /></div>
          <div style={OverlayDivsStyle}>
            <OverlayDivs 
              pickedDate={pickedDate}
              handleCellDialogOpen={handleCellDialogOpen}
              handleCellOpen={handleCellOpen}
              setSelectDateTime={setSelectDateTime}
              taskChipData={taskChipData}
              cells={cells}
            />
          </div>
        </div>  
      </div>
      <NewTaskDialog 
        taskDialogOpen={taskDialogOpen} 
        handleTaskDialogClose={handleTaskDialogClose} 
        updateTasks={updateTasks}
      />
      <TaskEditDialog 
        taskEditDialogOpen={taskEditDialogOpen} 
        handleTaskEditDialogClose={handleTaskEditDialogClose} 
        selectedTaskId={selectedTaskId}
        selectedTaskTitle={selectedTaskTitle} 
        selectedTaskContent={selectedTaskContent} 
        setSelectedTaskTitle={setSelectedTaskTitle} 
        setSelectedTaskContent={setSelectedTaskContent}
        updateTasks={updateTasks}
      />
      <NewCellDialog 
        cellDialogOpen={cellDialogOpen} 
        handleCellDialogClose={handleCellDialogClose} 
        selectDateTime={selectDateTime}
        setSelectDateTime={setSelectDateTime}
        taskChipData={taskChipData}
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
