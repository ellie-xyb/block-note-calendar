import * as React from 'react';
import Chip from '@mui/material/Chip';

// const [cells, setCells] = React.useState([
//   {id: 0, taskId: 0, datetime: new Date('2022-02-01T08:00:00+0900')},
//   {id: 1, taskId: 1, datetime: new Date('2022-01-29T06:00:00+0900')},
//   {id: 2, taskId: 2, datetime: new Date('2022-02-02T09:00:00+0900')},
//   {id: 3, taskId: 3, datetime: new Date('2022-02-03T10:00:00+0900')},
//   {id: 4, taskId: 3, datetime: new Date('2022-02-04T10:00:00+0900')},
// ]);

const chipListDivStyle = {
    width: '90%',
    maxHeight: '53px',
    overflowY: 'scroll',
    display: 'flex',
    flexWrap: 'wrap',
    zIndex: 700,
    gap: '2.5px',
    position: 'relative',
    left: '0px',
    top: '120px',
};

export default function TaskChip(props) {

  return (
    <div
      style={chipListDivStyle} 
    >
      {props.cells.filter((c) => c.datetime.toDateString() === props.columnDate.toDateString()).map((data) => {
        let icon;
        return (
          <Chip
            onMouseUp={(e) => e.stopPropagation()}
            sx={{
              height: '25px',
              width: '100%',
              borderRadius: '5px',
              backgroundColor: '#4284F3',
              cursor: 'pointer',
            }}
            icon={icon}
            label={data.taskId} //TODO: Look up the task title
            color='info'
            // onDelete={props.handleDeleteTaskChip(data)}
          />
        );
      })}
    </div>
  );
}
