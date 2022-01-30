import * as React from 'react';
import Chip from '@mui/material/Chip';

function turnTimeToTopNum(time) {
  let gap = time - 6 >= 0 ? time - 6 : time - 6 + 24;
  return gap * 55 + 120;
};

export default function TaskChip(props) {
  const positionTop = 120;
  return (
    <div>
      {props.cells.filter((c) => c.datetime.toDateString() === props.columnDate.toDateString()).map((data) => {
        let positionTop = turnTimeToTopNum(data.datetime.getHours());
        return (
          <div
            style={{
            width: '90%',
            maxHeight: '53px',
            overflowY: 'scroll',
            display: 'flex',
            flexWrap: 'wrap',
            zIndex: 700,
            gap: '2.5px',
            position: 'relative',
            left: 0,
            top: `${positionTop}px`,
            }} 
          >
            <Chip
              onMouseUp={(e) => e.stopPropagation()}
              sx={{
                height: '25px',
                width: '100%',
                borderRadius: '5px',
                backgroundColor: '#4284F3',
                cursor: 'pointer',
              }}
              label={props.taskChipData[data.taskId].title} 
              color='info'
              // onDelete={props.handleDeleteTaskChip(data)}
            />
          </div>
        );
      })}
    </div>
  );
}
