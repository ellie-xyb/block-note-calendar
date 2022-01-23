import * as React from 'react';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';

// color: '#3E5060',

const LongEachDayDiv = (props) => {
    return (
        <div style={{
            width: 'calc(100% / 7)',
            height: '1465px',
            backgroundColor: 'pink',
            opacity: '0.2',
        }}
        onClick = {props.onClick}
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

    const dates = getDatesBetween(start, end).map( date => date.getDate() );
    
    const columns = [
        { id: '0', dayNumber: dates[0], dayName: 'SUN' },
        { id: '1', dayNumber: dates[1], dayName: 'MON' },
        { id: '2', dayNumber: dates[2], dayName: 'TUE' },
        { id: '3', dayNumber: dates[3], dayName: 'WED' },
        { id: '4', dayNumber: dates[4], dayName: 'THU' },
        { id: '5', dayNumber: dates[5], dayName: 'FRI' },
        { id: '6', dayNumber: dates[6], dayName: 'SAT' },
    ];

    const [columnID, setColumnID] = React.useState('');

    // might have a async problem later 
    const handleClickOnOverlay = (id) => {
        setColumnID(id);
        // console.log(id);
    };

    return (  
        <div style={{
            height: '1465px',
            zIndex: 400,
            width: '100%',
            minWidth: '525px',
            display: 'flex',
        }}>
            {columns.map((column) => {
                return (
                    <LongEachDayDiv onClick={() => handleClickOnOverlay(column.id)} >
                        <LongDivHeader 
                            dayName={column.dayName} 
                            dayNumber={column.dayNumber}
                        />
                    </LongEachDayDiv>  
                );
            })}        
        </div>
    );    
}