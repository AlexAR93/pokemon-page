import React, { useEffect, useState } from 'react'
import { Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
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

export const MuiNav = () => {
  const [value, setValue] = useState(0);
  // const [currentPath, setCurrentPath] = useState('')


  const navigate=useNavigate();
  const location=useLocation();

  window.addEventListener('popstate',useEffect(() => {
    if(location.pathname=='/pokemons'){
     setValue(0);
    }else if(location.pathname=='/compare'){
      setValue(1);
    }else if(location.pathname=='/about'){
      setValue(2);
    }
}, [location])
)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue==0){
      navigate('/pokemons',{
        replace:false
      })
    }else if(newValue==1){
      navigate('/compare',{
        replace:false
      })
    }else if(newValue==2){
      navigate('/about',{
        replace:false
      })
    }
  };


  // const handleButtonChange=(event)=>{
  //   console.log(event.target)
  // }

  return (
    <>
       <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Pokemons" {...a11yProps(0)} />
          <Tab label="Compare Pokemons" {...a11yProps(1)} />
          <Tab label="About this app" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </>
  );
}
