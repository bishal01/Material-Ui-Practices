import React,{useState} from 'react'
import {  Box, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles=makeStyles({
  icon:{
    fontSize:"3.2rem",
  
    fontWeight:500

  },
  app:{
    backgroundColor:"transparent"
  },
  app2:{
    backgroundColor:"pink"
  }
 
});

const Header = () => {
  const classes=useStyles()

const [navbar,setnavbar]=useState(false)  
const [state] = useState(1)
const [state1] = useState(2)
const [state2] = useState(3)
const [state3] = useState(4)


const changebackground=()=>{
  if (window.scrollY>=80){
    setnavbar(true);

  }

  else{
    setnavbar(false);
  }
}
window.addEventListener('scroll',changebackground);
  return (
  

    <>
    <Box  >
    <AppBar 
    className={navbar? classes.app2:classes.app}
    elevation={0} 
    
  
  >
      
      <Toolbar>
        <IconButton  >
       <MenuIcon className={classes.icon} />

      </IconButton>
        <Typography style={{fontFamily: ['Ubuntu', 'sans-serif'].join(','),fontSize:"2.5rem" ,flexGrow:1}}  >
        OLEO RESTOURANT
        </Typography>
        <Toolbar>
        <Toolbar>
        <Typography style={{color:"#36ba1c",fontWeight:600,fontSize:"1.7rem"}} >Style{state}</Typography>
        </Toolbar>
        <Toolbar>
        <Typography style={{color:"#36ba1c",fontWeight:600,fontSize:"1.7rem"}}  >Style{state1}</Typography>
        </Toolbar>
        <Toolbar>
        <Typography style={{color:"#36ba1c",fontWeight:600,fontSize:"1.7rem"}}  >Style{state2}</Typography>
        </Toolbar>
        <Toolbar>
        <Typography style={{color:"#36ba1c",fontWeight:600,fontSize:"1.7rem"}}  >Style{state3}</Typography>
        </Toolbar>

         
        </Toolbar>

        
       </Toolbar>

    </AppBar>
    </Box>
      
 </>
  )
}

export default Header
