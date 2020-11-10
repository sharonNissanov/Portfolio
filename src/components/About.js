import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography } from '@material-ui/core';
import {isMobileOnly, isMobile} from "react-device-detect";
import { motion,AnimatePresence } from 'framer-motion';
import {FaCss3Alt, FaHtml5, FaReact, FaNpm, FaNodeJs} from 'react-icons/fa'
import {SiJavascript,SiRedux, SiMongodb, SiFirebase, SiBootstrap, SiMaterialUi, SiJava, SiCplusplus,SiGithub} from 'react-icons/si'
import {Grid} from 'semantic-ui-react'

function About(props) {
  
  // const [chosen_language , setChosen_language] = React.useState(null)
  
  // React.useEffect(() => {
  //   try{ 
  //     const chosen_lan = localStorage.getItem("Language");
  //     if(chosen_lan!==null){ 
  //       setChosen_language(chosen_lan)
   
  //     }
  //   }catch(e){
  //       console.log(e)
  //   } 
  // });

  const useStyles = makeStyles((theme) => ({
    text:{
      // padding: '2em',
      color:"#463333", 
      top:"10%" , 
      position:"absolute", 
      left:"20%", 
      transform: "translate(-12%,-5%)",
      direction:props.chosen_language==="Hebrew"?"rtl":null,

    }
  }));
  const classes = useStyles();
  
  const containerVariants = {
  exitTiTle: {
    x: "-100vh",
    transition: { ease: 'easeInOut' },
  },
  exitInfo: {
    x: "100vh",
    transition: { ease: 'easeInOut' },
  },
  hiddenTitle: { 
    opacity: 0,
    x: '-100vw',
  },
  hiddenSecondTitle:{
    opacity: 0,
    x: '-100vw',
  },
  visibleTitle: { 
    opacity: 1,
    x: 0, 
    transition: {
      duration: 1,
    },
  },
  visibleSecontTitle: { 
    opacity: 1,
    x: 0, 
    transition: {
      duration: 1,
      delay: 1.2, 
    },
  },
  hiddenInfo: { 
    opacity: 0,
    x: '100vw',
  },
  hiddenSecondInfo:{
    opacity: 0,
    x: '100vw',
  },
  visibleInfo: {
    x: 0,  
    opacity: 1, 
      transition: { 
      delay: 0.5, 
      duration: 1.5 
    },
  },
  visibleSecondInfo:{
    x: 0,  
    opacity: 1, 
      transition: { 
      delay: 1.5, 
      duration: 1.5 
    },
  },

  };

  const AboutEnglishText=()=>(
    <div className={classes.text} >

    <motion.div 
      variants={containerVariants}
      initial="hiddenTitle"
      animate="visibleTitle"
      exit="exitTiTle" 
     >
    <Typography variant={isMobileOnly? "h4" : "h2"}>{isMobile? <span><br></br><br></br> </span> : <br></br>} Hey there!  <br></br> </Typography>
    </motion.div>
   
    <motion.div 
        variants={containerVariants}
        initial="hiddenInfo"
        animate="visibleInfo"
        exit="exitInfo"
       > 
      <Typography variant={"h6"}>    
      I'm Sharon Nissanov, 23 years old and a <span style={{color:"#835858", fontWeight:"bold"}}><br></br> software engineering graduate-</span>  GPA 89.<br></br>
      I'm looking for my next challenge in software development.<br></br>
      I've recently completed developing a project for a security organization using:<br></br>
      React JS, React-Redux, NodeJS, and MongoDB,<br></br>
      you can see my demos on the 'Portfolio' page.<br></br>     
      I like frontend & backend, and of course the minimalist and elegant codes.
      </Typography>
      </motion.div>
      <br></br> 

      <motion.div 
      variants={containerVariants}
      initial="hiddenSecondTitle"
      animate="visibleSecontTitle"
      exit="exitTiTle" 
     > <Typography variant={isMobileOnly? "h4" : "h2"}> My knowledge </Typography><br></br>
      </motion.div>

      <motion.div 
      variants={containerVariants}
      initial="hiddenSecondInfo"
      animate="visibleSecondInfo"
      exit="exitInfo" 
     >
       <Skills/>
    </motion.div>

  </div>
  
  )
  
  const Skills=()=>(
    <Grid columns={3} container  stackable style={{fontSize: isMobileOnly? "20px" : "17px",direction:"ltr" }}>
    <Grid.Row  >
      <Grid.Column >
       <FaHtml5/> HTML
      </Grid.Column>
      <Grid.Column>
      <FaCss3Alt/> CSS3
      </Grid.Column>
      <Grid.Column>
        <SiJavascript/> JavaScript
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <FaReact/> React JS
      </Grid.Column>
      <Grid.Column>
        <SiRedux/> Redux
      </Grid.Column>
      <Grid.Column>
        <FaNpm/> NPM
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <SiMongodb/> MongoDB
      </Grid.Column>
      <Grid.Column>
      <FaNodeJs/> NodeJS
      </Grid.Column>
      <Grid.Column>
      <SiFirebase/> Firebase
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
      <SiBootstrap/> Bootstrap
      </Grid.Column>
      <Grid.Column>
      <SiMaterialUi/> Material UI
      </Grid.Column>
      <Grid.Column>
      <FaReact/> Semantic UI
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
       <SiCplusplus/> C, C++
      </Grid.Column>
      <Grid.Column>
      <SiJava/> Java
      </Grid.Column>
      <Grid.Column>
      <SiGithub/> Git
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
  const AboutHebrewText=()=>(

    <div className={classes.text} >

    <motion.div 
      variants={containerVariants}
      initial="hiddenTitle"
      animate="visibleTitle"
      exit="exitTiTle" 
     >
    <Typography variant={isMobileOnly? "h4" : "h2"}>{isMobile? <span><br></br><br></br> </span> : <br></br>} היי! <br></br> </Typography>
    </motion.div>
   
    <motion.div 
        variants={containerVariants}
        initial="hiddenInfo"
        animate="visibleInfo"
        exit="exitInfo"
       > 
      <Typography variant={"h6"}>   
      אני שרון ניסנוב, בת 23  <span style={{color:"#835858", fontWeight:"bold"}}>ובוגרת תואר ראשון בהנדסת תוכנה </span>- ממוצע 89.<br></br>
      כרגע אני מחפשת את האתגר הבא שלי בתחום פיתוח תוכנה.<br></br>
      לאחרונה פיתחתי מערכת לאירגון ביטחוני ע"י שימוש ב:<br></br>
      React JS, React-Redux, NodeJS, MongoDB.<br></br>
      תוכלו להתרשם מהעבודות שלי בדף 'תיק עבודות'. <br></br>
      אני נהנת מפיתוח צד לקוח וצד שרת וכמובן מכתיבת קודים אלגנטים.  
      </Typography>
      </motion.div>
      <br></br> 

      <motion.div 
      variants={containerVariants}
      initial="hiddenSecondTitle"
      animate="visibleSecontTitle"
      exit="exitTiTle" 
     > <Typography variant={isMobileOnly? "h4" : "h2"}> הידע שלי  </Typography><br></br>
      </motion.div>

      <motion.div 
      variants={containerVariants}
      initial="hiddenSecondInfo"
      animate="visibleSecondInfo"
      exit="exitInfo" 
     >
       <Skills/>
    </motion.div>

    </div>
  )


  return (
  <div className="About">
    {props.chosen_language==="English" ? <AboutEnglishText/>: <AboutHebrewText/>}
  </div>
    
  )
}






export default About;