import * as React from 'react';
import Chip from '@mui/material/Chip';

function turnTimeToTopNum(time) {
  let gap = time - 6 >= 0 ? time - 6 : time - 6 + 24;
  return gap * 55 + 120;
};

function compareDateTime( a, b ) {
  if ( a.start_datetime.getTime() < b.start_datetime.getTime() ){
    return -1;
  }
  if ( a.start_datetime.getTime() > b.start_datetime.getTime() ){
    return 1;
  }
  return 0;
}

export default function TaskChip(props) {
  let positionTop = 120;
  let positionLeft = 0;
  let chipBorder = 'none';
  let chipWidth = '90%';
  let chipHeight = '45';
  return (
    <>
      {props.cells.sort(compareDateTime).filter((c) => c.start_datetime.toDateString() === props.columnDate.toDateString()).map((data, index, dataArray) => {
        positionTop = turnTimeToTopNum(data.start_datetime.getHours());
        {if(index > 0 && dataArray[index - 1].start_datetime.getTime() === data.start_datetime.getTime()){
          positionLeft += 10;
          positionTop += 1;
          chipBorder = 'thin solid white';
          chipWidth = `calc(90% - ${positionLeft}px + 8px)`;
        }else{
          positionLeft = 0;
          chipBorder = 'none';
          chipWidth = '90%';
        }}
        chipHeight = (data.end_datetime.getHours() - data.start_datetime.getHours() - 1) * 55 + 45;
        console.log(chipHeight);
        return (
          <div
            style={{
            zIndex: 700,
            width: chipWidth,
            position: 'relative',
            left: `${positionLeft}px`,
            top: `${positionTop}px`,
            marginBottom: `-${chipHeight}px`,
            }} 
          >
            <Chip
              onMouseUp={(e) => e.stopPropagation()}
              sx={{
                height: `${chipHeight}px`,
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
