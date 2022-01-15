import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';

const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
//   table: {
//     // temporary right-to-left patch, waiting for
//     // https://github.com/bvaughn/react-virtualized/issues/454
//     '& .ReactVirtualized__Table__headerRow': {
//       ...(theme.direction === 'rtl' && {
//         paddingLeft: '5 !important',
//       }),
//       ...(theme.direction !== 'rtl' && {
//         paddingRight: undefined,
//       }),
//     },
//   },
  tableRow: {
    cursor: 'pointer',
  },
  tableCell: {
    flex: 1,
    border: '0.1px solid #F0F3F4',
    padding: '8px',
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 80,
    rowHeight: 50,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? 'right'
            : 'left'
        }
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const defaultTheme = createTheme();
const VirtualizedTable = withStyles(styles, { defaultTheme })(MuiVirtualizedTable);

// ---

function createData(id, time) {
    return { id, time };
  }
const rows =[
    createData(0, '6AM'),
    createData(1, '7AM'),
    createData(2, '8AM'),
    createData(3, '9AM'),
    createData(4, '10AM'),
    createData(5, '11AM'),
    createData(6, '12AM'),
    createData(7, '1PM'),
    createData(8, '2PM'),
    createData(9, '3PM'),
    createData(10, '4PM'),
    createData(11, '5PM'),
    createData(12, '6PM'),
]

export default function NoteCalendar() {
  return (
    <Paper style={{ height: '100%', width: '99%', marginLeft: '10px' }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 120,
            label: 'GMT+09',
            dataKey: 'time',
          },
          {
            width: 120, 
            label: '16',
            dataKey: 'sun',
            numeric: true,
          },
          {
            width: 120,
            label: '17',
            dataKey: 'mon',
            numeric: true,
          },
          {
            width: 120,
            label: '18',
            dataKey: 'tue',
            numeric: true,
          },
          {
            width: 120,
            label: '19',
            dataKey: 'wed',
            numeric: true,
          },
          {
            width: 120,
            label: '20',
            dataKey: 'thu',
            numeric: true,
          },
          {
            width: 120,
            label: '21',
            dataKey: 'fri',
            numeric: true,
          },
          {
            width: 120,
            label: '22',
            dataKey: 'sat',
            numeric: true,
          },
        ]}
      />
    </Paper>
  );
}
