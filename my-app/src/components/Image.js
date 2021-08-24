import { makeStyles} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';



const useStyle=makeStyles({

 

  
    heroimage:{
        position:'relative',
        height:'60rem',
        overflow:'hidden',
        backgroundImage: `url(${process.env.PUBLIC_URL+'/image/restourant.jpg'})` ,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundAttachment:'fixed',
        zIndex:-3,
      

   
      

    },
    
    div:{
      position:'absolute',
      display:'flex',
      flexDirection:'column',
     top:'25%',
     left:'50%',
     transform:'translate(-50%,30%)',
     overflow:'hidden',
     textAlign:'center',
     width:'69rem'
    
     
    },
    typ:{

    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    lineHeight:1.2,
    fontSize:'6.5rem',
    color:"#166b2d",
  

    },
    p:{
      color:"#fff",
      fontSize:'2rem',
      fontFamily: ['Ubuntu', 'sans-serif'].join(','),
      marginBottom:'1rem',
     
     
    },
   
})

const Image= () => {
    const classes=useStyle()
    return (
        <>
      <div>
        <div className={classes.heroimage}>
        <CssBaseline />
        <div className={classes.div} >
         <h1 className={classes.typ}>
               OLEO-RESTAURANT
             </h1>
             <span className={classes.p} >Great Place to have Fun and Stay </span>
             <div>
             <Button variant="contained" style={{fontSize:"1.5rem"}} color="secondary">
                  Book Your Seat
                   </Button>
                 </div>
             
                
        </div>
       
        
        </div> 
      </div>


        </>
    )
}

export default Image
