import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const chipListDivStyle = {
    width: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    zIndex: 10,
    cursor: 'pointer',
    p: 0.5,
    m: 0,
    position: 'relative',
    top: '800px',
    left: '300px',
};

export default function TaskChip(props) {

  return (
    <div
      style={chipListDivStyle} 
      component="ul"
    >
      {props.taskChipData.map((data) => {
        let icon;

        return (
          <ListItem key={data.id}>
            <Chip
              icon={icon}
              label={data.title}
              color='info'
              onDelete={props.handleDeleteTaskChip(data)}
            />
          </ListItem>
        );
      })}
    </div>
  );
}