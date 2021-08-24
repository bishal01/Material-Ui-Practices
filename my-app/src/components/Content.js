import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'


const useStyles=makeStyles({

    main:{
        background:'rgba(255,255,255,.2)',
        height:"50rem",
        position:'relative'

    },
    pos:{
         
        position:'absolute',
        top:"30%",
        left:"50%",
        transform:"translate('-50%','50%)"

    }



})


const Content = () => {
    const classes=useStyles()
    return (
        <>

  
  
      <Grid   container
        style={{
    
            height:'50rem',
            position:'relative',
            marginTop:"1.5rem",
            background:'#000000'
            }}

  direction="row"
  justifyContent="space-around" 

  
  >



          <Grid item md={4} sm={12} style={{marginTop:'8rem',marginBottom:"1rem" }} > 
    
        <div style={{lineHeight:'2.7rem',marginLeft:'2.7rem'}} >
      <Typography  style={{fontSize:'2.5rem',fontFamily: 'sans-serif',color:'#D69024'}} >Special Pizza</Typography>
      <Typography style={{fontSize:'1.5rem',color:"#fff"}} variant="h7" color="initial">
      
      <span style={{fontSize:'2rem',color:"#fff"}} >Special Pizza</span> only available in OLEO RESTOURANT 
      which have more spicy and delicious taste.<br/> You can order online for only $20 cheaper price 
      Delivery cost is Free    
       </Typography>
       </div>
     </Grid>
     <Grid item md={4} sm={12} >
    <div>
        <img style={{width:"100%",marginTop:'10rem'}} src="/image/f3.jpg" alt="" />
    </div>
    </Grid>

    </Grid>

    <div style={{height:'40rem'}} >

    </div>
  



 </>

    )
}

export default Content
