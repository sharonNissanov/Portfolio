import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import{ TextField,Typography,Grid, Box, Button} from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

function Contact(props) {

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#f3e1e1",
    height: "100vh",
   

  },
  heading: {
    color: "#321f28",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    
  },
  input: {
    color: "#321f28",
  },
  button: {
    marginTop: "1rem",
    color: "#321f28",
    borderColor: "black",

    // left: props.chosen_language==="Hebrew"&& "-40%",
    // transform: props.chosen_language==="Hebrew"&& "translate(15%, 15%)",
  },
  field: {
    margin: "1rem 0rem",
    
  },
}));

const InputField = withStyles({
  root: {
    direction: props.chosen_language==="Hebrew"&& 'rtl',
  

    "& label.Mui-focused": {
      color: "#7d5a5a",
      // background:"black"
      ".MuiInputLabel-filled":{
        color:"black"
      }
    },
    "& label": {
      color: "#7d5a5a",
      // background: props.chosen_language==="Hebrew"&&"white",
       left: props.chosen_language==="Hebrew"&&"90%",
      transform: props.chosen_language==="Hebrew"&& "translate(-33%, -0%)",
    },
    "& .MuiOutlinedInput-root": {
      direction: props.chosen_language==="Hebrew"&& 'rtl',
     
      "& fieldset": {
        borderColor: "#321f28",
       
        // borderColor: "blue",
        direction: props.chosen_language==="Hebrew"&& 'rtl',
        // borderColor: props.chosen_language==="Hebrew"&& "black",
      },
      "&:hover fieldset": {
        borderColor: "#321f28", direction: props.chosen_language==="Hebrew"&& 'rtl',
      },
      "&.Mui-focused fieldset": {
        color: "#321f28",
        borderColor: "#7d5a5a", 
      },
    },
  },
})(TextField);
const classes = useStyles();

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'template_k3cbnqu', e.target,  'user_QyM0107Dq9pJYRXyQsmFD')
      .then((result) => {
        // alert("sdsds");
      }, (error) => {
        alert("somethimg went wrong");
      });
  }

  const containerVariants = {
    hidden: { 
      x:"-100vh",
      opacity: 0, 
    },
    visible: { 
      x:0,
      opacity: 1, 
      transition: {
        duration: 1,
      },
    },
    exit: {
      x:"100vh",
      transition: { ease: 'easeInOut' }
    }
  };


  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: props.chosen_language==="Hebrew" ? "0px 0px 8px  rgb(255,255,255)" : "0px 0px 8px rgb(255,255,255)",
      boxShadow: props.chosen_language==="Hebrew" ?  "0px 0px 8px  #321f28" : "0px 0px 8px rgb(255,255,255)", 
      transition: {
         duration: 0.7,
        yoyo: Infinity
      }
    }
  }
  return (
    <motion.div
    // className="Home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    > 

     <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center" style={{ textAlign:props.chosen_language==="Hebrew"&&"right", direction:props.chosen_language==="Hebrew"? "rtl":"ltr",}}>
          <form className="contact-form" onSubmit={sendEmail} style={{   textAlign:props.chosen_language==="Hebrew"&&"right", direction:props.chosen_language==="Hebrew"? "rtl":"ltr", top:"20%",position:"absolute"}}>
          <Typography variant="h5" className={classes.heading}>
           {props.chosen_language==="Hebrew"? "צרו איתי קשר": "Hire or Contact me..."} 
          </Typography>
          <InputField 
           
            required
            fullWidth={true}
            label={props.chosen_language==="Hebrew"? "שם":"Name"}
            variant={props.chosen_language==="Hebrew"? "filled":"outlined"}
            inputProps={{ className: classes.input }}
            name= "user_name"
            
          />
          <InputField
            required
            fullWidth={true}
            label={props.chosen_language==="Hebrew"? "מייל":"Email"}
            variant={props.chosen_language==="Hebrew"? "filled":"outlined"}
            inputProps={{ className: classes.input }}
            className={classes.field}
            name="user_email"
            type="email"
         
          />
          <InputField
           required
            fullWidth={true}
            label={props.chosen_language==="Hebrew"? "הודעה":"Message"}
            variant={props.chosen_language==="Hebrew"? "filled":"outlined"}
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            className={classes.field}
            name="message"
          />

          <motion.div
           variants={buttonVariants}
           animate="hover"
          >
            <Button
              variant={props.chosen_language==="Hebrew"? "filled":"outlined"}
              fullWidth={props.chosen_language==="Hebrew"?true:true}
              endIcon={props.chosen_language==="English"&&<Send />}
              startIcon={props.chosen_language==="Hebrew"&&<Send />}
              className={classes.button}
              type="submit"
            > 
            {props.chosen_language==="Hebrew" && <div style={{position:"relative", width:"12px"}} />}
            {props.chosen_language==="Hebrew"? "  שליחה  ": " Contact Me "}   
            
            </Button>
           </motion.div>
          </form>
  
      </Grid>

    </Box> 
    </motion.div> 
  );
};

export default Contact;
