import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "./Particles";
import { motion } from 'framer-motion';
import sharon from './pictures/as1.jpg'

const useStyles = makeStyles((theme) => ({
    avatarW: {
    width: theme.spacing(12),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    opacity:0.7,    
  },
  title: {
    color: "#463333",

  },
  subtitle: {
    // color: "tan",
    color: "#463333",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%,-60%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  image: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-40%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  titleBox: {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%,-55%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  

}));


const containerVariants = {
  hidden: { 
    opacity: 0, 
  },
  visible: { 
    opacity: 1, 
    // transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
   
    transition: { ease: 'easeInOut' }
  }
};


const Header= ({ chosen_language }) =>  {
  const classes = useStyles();

  return (
      // <>
  <motion.div
  className="Home"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  > 
    <Grid container justify="center" className={classes.image}>
      <Avatar className={classes.avatarW} src={sharon} alt="Sharon Nissanov" />
    </Grid>

    <Box className={classes.titleBox}>
        <Typography className={classes.title} variant="h3">
          {chosen_language==="English"?
           <Typed strings={["Sharon Nissanov"]} typeSpeed={40}/>:
           <Typed strings={["שרון ניסנוב"]} typeSpeed={40} showCursor={false}/>
        }
        </Typography>
        </Box> 


        <Box className={classes.typedContainer}>
        <Typography className={classes.subtitle} variant="h6">
        {chosen_language==="English"?
            <Typed
            strings={[
                " Software engineering graduate",
                " Open To Work"
            ]}
       
            typeSpeed={40}
            backSpeed={50}
            loop
            />:
            <Typed
         
            strings={[
                "בוגרת תואר ראשון בהנדסת תוכנה",
                "מחפשת משרת פיתוח"
            ]}
            typeSpeed={40}
            backSpeed={50}
            showCursor={false}
            loop
            />
          }
        </Typography>

        </Box> 

        <Particles/>
    </motion.div>   
      // </>
    
  );
};

export default Header;
