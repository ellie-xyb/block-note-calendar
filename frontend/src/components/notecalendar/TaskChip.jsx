import * as React from 'react';
import Chip from '@mui/material/Chip';

function turnTimeToTopNum(time) {
  let gap = time - 6 >= 0 ? time - 6 : time - 6 + 24;
  return gap * 55 + 120;
};

function compareDateTime( a, b ) {
  if ( a.datetime.getTime() < b.datetime.getTime() ){
    return -1;
  }
  if ( a.datetime.getTime() > b.datetime.getTime() ){
    return 1;
  }
  return 0;
}

export default function TaskChip(props) {
  let positionTop = 120;
  let positionLeft = 0;
  let chipBorder = 'none';
  return (
    <>
      {props.cells.sort(compareDateTime).filter((c) => c.datetime.toDateString() === props.columnDate.toDateString()).map((data, index, dataArray) => {
        positionTop = turnTimeToTopNum(data.datetime.getHours());
        {if(index > 0 && dataArray[index - 1].datetime.getTime() === data.datetime.getTime()){
          positionLeft += 8;
          positionTop += 1;
          chipBorder = 'thin solid white';
        }else{
          positionLeft = 0;
          chipBorder = 'none';
        }}
        return (
          <div
            style={{
            width: '90%',
            zIndex: 700,
            position: 'relative',
            left: `${positionLeft}px`,
            top: `${positionTop}px`,
            marginBottom: '-45px',
            }} 
          >
            <Chip
              onMouseUp={(e) => e.stopPropagation()}
              sx={{
                height: '45px',
                width: '100%',
                borderRadius: '5px',
                backgroundColor: '#4284F3',
                cursor: 'pointer',
                border: chipBorder,
              }}
              label={props.taskChipData[data.taskId].title} 
              color='info'
              // onDelete={props.handleDeleteTaskChip(data)}
            />
          </div>
        );
      })}
    </>
  );
}
