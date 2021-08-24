import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';

import CardMedia from '@material-ui/core/CardMedia';
import { Box,Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { styled } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { CardActionArea } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';









const useStyles=makeStyles({
    head:{
        fontSize:"2rem",
        color:"red",
        fontFamily:"Arial",

    },

    effect:{
      maxWidth:'34rem',
      '&:hover': {
        boxShadow:"20rem",
        backgroundColor:"#fff"
      }

    }
   
  
})
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CCard = () => {
    const classes=useStyles() 
    const CardTitle=<h1 className={classes.head} >Hello</h1>
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    

   
    
    return (

     
      <>
     
  <Grid  container
  style={{marginTop:"15rem",marginBottom:"20.5rem"}}
  container
  direction="row"
  justifyContent="space-around"
  alignItems="flex-start"
>

      <Grid item xs={12} md={3} style={{marginBottom:"2rem"}} >
          
          <Card 

          className={classes.effect}
          >
          <CardHeader  avatar={
            
            <Avatar style={{width:'5rem' ,height:"5rem"}} src="/image/m.jpg"  > 
            </Avatar>

        }
        
        title={CardTitle}
        />
      
      <CardMedia
         style={{
          height: 0,
          paddingTop: '56.25%', // 16:9
        }}
        image="image/f1.jpg"
        title="foodie"
       
        />
         <CardContent>
          <Typography variant="body2" color="text.secondary" style={{fontSize:"1.7rem"}} >
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions>
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
  
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph style={{fontSize:'1.5rem'}} >Method:</Typography>
            <Typography paragraph style={{fontSize:'1.5rem'}}  >  
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph style={{fontSize:'1.5rem'}}>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph style={{fontSize:'1.5rem'}}>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography style={{fontSize:'1.5rem'}}>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
  
         </Card>
         </Grid>


         <Grid xs={12} md={3} marginBottom="2rem" >
           <Card>
           
           <CardActionArea>
        <CardMedia
             style={{
              height: 0,
              paddingTop: '56.25%', // 16:9
            }}
          image="/image/f2.jpg"
          title="Foodie2"
        />
        <CardContent>
          <Typography style={{fontSize:"2rem"}} gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography style={{fontSize:"1.5rem"}} variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>

           </Card>
           </Grid>


      <Grid xs={12} md={3} marginBottom="2rem"  >
      <Card style={{maxWidth:"35rem"}} >
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="/image/f3.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" style={{fontSize:"1.9rem"}}>
          Lizard
        </Typography>
        <Typography style={{fontSize:"1.5rem"}} variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions  >
        <Box   >
        <Button  size="small" style={{fontSize:"1.2rem",margin:"0 1.9rem "}} >Share</Button>
        <Button   size="small" style={{fontSize:"1.2rem",margin:"0 1.9rem "}} >Learn More</Button>
        </Box>
      </CardActions>
    </Card>
             </Grid>
</Grid>
        
       
         </>
     
       


     
    )
}

export default CCard
