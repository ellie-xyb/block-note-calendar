import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tasks from './Tasks';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Thetab(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '300px' }}>
      <Box 
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          }}
        >
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
        >
          <Tab label="Task" {...a11yProps(0)} />
          <Tab label="History" {...a11yProps(1)} sx={{mr: 16}} />
          <IconButton 
            color="secondary" 
            aria-label="create task"
            sx={{width: '45px', height: '45px'}}
            >
            <AddIcon 
              onClick={props.handleClickOpen} 
              size='large' 
            />
          </IconButton>       
        </Tabs>  
      </Box>
      <TabPanel value={value} index={0}>
        <Tasks></Tasks>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tasks></Tasks>
      </TabPanel>
    </Box>
  );
}
