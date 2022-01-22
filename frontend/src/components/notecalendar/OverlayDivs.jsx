import * as React from 'react';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';

// color: '#3E5060',

const LongEachDayDiv = (props) => {
    return (
        <div style={{
            width: 'calc(100% / 7)',
            height: '1465px',
            // backgroundColor: 'blue',
        }}>
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
        { id: 'sun', dayNumber: dates[0], dayName: 'SUN' },
        { id: 'mon', dayNumber: dates[1], dayName: 'MON' },
        { id: 'tue', dayNumber: dates[2], dayName: 'TUE' },
        { id: 'wed', dayNumber: dates[3], dayName: 'WED' },
        { id: 'thu', dayNumber: dates[4], dayName: 'THU' },
        { id: 'fri', dayNumber: dates[5], dayName: 'FRI' },
        { id: 'sat', dayNumber: dates[6], dayName: 'SAT' },
    ];

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
                    <LongEachDayDiv>
                        <LongDivHeader dayName={column.dayName} dayNumber={column.dayNumber} />
                    </LongEachDayDiv>  
                );
            })}        
        </div>
    );    
}