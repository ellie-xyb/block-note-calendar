import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function TaskChip(props) {

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {props.taskChipData.map((data) => {
        let icon;

        return (
          <ListItem key={data.id}>
            <Chip
              icon={icon}
              label={data.title}
              onDelete={props.handleDeleteTaskChip(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
