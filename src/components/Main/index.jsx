import React from 'react'
import { Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import PokemonCarts from './PokemonCarts';
import AboutThisApp from './AboutThisApp';
import ComparePokemons from './ComparePokemons';
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
          <Box sx={{ p: 3}}>
            {children}
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

const Main = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
       <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Pokemons" {...a11yProps(0)} />
          <Tab label="Compare Pokemons" {...a11yProps(1)} />
          <Tab label="About this app" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PokemonCarts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ComparePokemons />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AboutThisApp />
      </TabPanel>
    </>
  );
}

export default Main