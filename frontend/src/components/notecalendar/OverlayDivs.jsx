import * as React from 'react';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';

const LongEachDayDiv = (props) => {
    return (
        <div style={{
            width: 'calc(100% / 7)',
            height: '1465px',
            backgroundColor: 'pink',
            opacity: '0.2',
        }}
        onClick = {props.onClick}
        onMouseDown = {props.onMouseDown}
        onMouseUp = {props.onMouseUp}
        onMouseMove = {props.onMouseMove}

        >
            {props.children}
        </div>
    )
};

const LongDivHeader = (props) => {
    return (
    <div style={{
        // backgroundColor: 'red',
        width: 'calc(100% / 7)',
        height: '120px',
        position: 'absolute',
        top: 0,
    }}>
        <p style={{
          color: '#3E5060',
          fontSize: '0.8em',
          paddingTop: '28px',
          paddingBottom: '8px',
          margin: 0,
        }}>
            {props.dayName}
        </p>
        <p style={{
          color: '#3E5060',
          fontSize: '1.4em', 
          padding: 0,
          margin: 0,
        }}>
            {props.dayNumber}
        </p>
    </div>    
    )
};

const useMouseMove = () => {
    const [state, setState] =  React.useState({x: 0, y: 0});
    
    const handleMouseMove = e => {
        setState(state => ({...state, x: e.offsetX, y: e.offsetY}));
        console.log(`x: ${e.offsetX}, y: ${e.offsetY}`);
    };
    return {
        x: state.x,
        y: state.y,
        handleMouseMove,
    }
};

export default function Overlaydivs(props) {
    const thePickedDate = props.pickedDate ? props.pickedDate : new Date();
    const start = startOfWeek(thePickedDate);
    const end = endOfWeek(thePickedDate);

    const getDatesBetween = (start, end) => {
        let dates = [];
        const currentDate = new Date(start);
        while (currentDate < end) {
            dates = [...dates, new Date(currentDate)];
            currentDate.setDate(currentDate.getDate() + 1);
        } 
        return dates;
    };

    // const dates = getDatesBetween(start, end).map( date => date.getDate() );
    const dates = getDatesBetween(start, end);

    const columns = [
        { id: '0', date: dates[0], dayName: 'SUN' },
        { id: '1', date: dates[1], dayName: 'MON' },
        { id: '2', date: dates[2], dayName: 'TUE' },
        { id: '3', date: dates[3], dayName: 'WED' },
        { id: '4', date: dates[4], dayName: 'THU' },
        { id: '5', date: dates[5], dayName: 'FRI' },
        { id: '6', date: dates[6], dayName: 'SAT' },
    ];

    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const {x, y, handleMouseMove} = useMouseMove();

    // might have a async problem later 
    const handleClickStartDate = (date) => {
        setStartDate(date);
        console.log(date);
    };

    const handleClickEndDate = (date) => {
        setEndDate(date);
        console.log(date);
    };

    return (  
        <div 
          onMouseDown={handleMouseMove}
          style={{
            height: '1465px',
            zIndex: 400,
            width: '100%',
            minWidth: '525px',
            display: 'flex',
        }}>
            {columns.map((column) => {
                return (
                    <LongEachDayDiv 
                        onMouseDown={() => handleClickStartDate(column.date)} 
                        onMouseUp={() => handleClickEndDate(column.date)} 
                    >
                        <LongDivHeader 
                            dayName={column.dayName} 
                            dayNumber={column.date.getDate()}
                        />
                    </LongEachDayDiv>  
                );
            })}        
        </div>
    );    
}