import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'time', label: null, width: 40, first: true, sortable: false },
    { field: 'sun', label: 'SUN', width: 145, sortable: false  },
    { field: 'mon', label: 'MON', width: 145, sortable: false  },
    { field: 'tue', label: 'TUE', width: 145, sortable: false  },
    { field: 'wed', label: 'WED', width: 145, sortable: false  },
    { field: 'thu', label: 'THU', width: 145, sortable: false },
    { field: 'fri', label: 'FRI', width: 145, sortable: false  },
    { field: 'sat', label: 'SAT', width: 145, sortable: false  },
];

const rows = [
    { id: 1, time: '6AM' },
    { id: 2, time: '7AM' },
    { id: 3, time: '8AM' },
    { id: 4, time: '9AM' },
    { id: 5, time: '10AM' },
    { id: 6, time: '11AM' },
    { id: 7, time: '12PM' },
    { id: 8, time: '1PM' },
    { id: 9, time: '2PM' },
    { id: 10, time: '3PM' },
    { id: 11, time: '4PM' },
    { id: 12, time: '5PM' },
    { id: 13, time: '6PM' },
    { id: 14, time: '7PM' },
    { id: 15, time: '8PM' },
    { id: 16, time: '9PM' },
    { id: 17, time: '10PM' },
    { id: 18, time: '11PM' },
    { id: 19, time: '12AM' },
    { id: 20, time: '1AM' },
    { id: 21, time: '2AM' },
    { id: 22, time: '3AM' },
    { id: 23, time: '4AM' },
    { id: 24, time: '5AM' },
  ];

export default function NoteCalendar(props) {
  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}
