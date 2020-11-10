import React from "react";
import { Image,Icon, Grid, Button} from 'semantic-ui-react';
import { motion } from 'framer-motion';
import english from './files/En_‏‏CV_Sharon_Nissanov.pdf';
import hebrew from './files/‏‏He_CV_Sharon_Nissanov.pdf';


// import hebrew from '../files/‏‏He_CV_Sharon_Nissanov.pdf'
/// update cv files !!!!!!!!!!
import ContactMenu from './Navbar/ContactMenu'

  const containerVariants = {
    hidden: { 
      opacity: 0, 
    },
    visible: { 
      opacity: 1, 
    },
    exit: {
     transition: { ease: 'easeInOut' }
    },
   
    exitInfo: {
      x: "100vh",
      transition: { ease: 'easeInOut' },
    },
    hiddenInfo: { 
      opacity: 0,
      x: '-100vh',
    },
    visibleInfo: {
      x: 0,  
      opacity: 1, 
        transition: { duration: 1.5 
      },
    },

  };

  const styles = {
    healines:{
      fontWeight:"900",
      textDecoration :"underline",
      // color:"#463333",
      // fontFamily:"fantasy",
      lineHeight:"1.4",
    },
    grade:{
      fontWeight:700,
    },
    years:{
      fontWeight:"bold",
      lineHeight:"1.2",
    },
    icon:{
      color:"#463333",
      cursor:"pointer",
    }
  }

const Resume = (props) => (

    <motion.div
     className="Resume" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    > 

 
  {/* displays only on small screens */}
  {props.chosen_language === "English"?
  <div className="contact-info-resume-small-screen" style={{textAlign:"left", left:"4%", position:"relative"}}>  
  <a href={english} style={{ color:"#a05344"}} download ><Icon name="download" size="big" style={styles.icon}/> DOWNLOAD MY RESUME </a> 
  </div>
:
<div className="contact-info-resume-small-screen" style={{textAlign:"right", right:"4%", position:"relative",direction:"rtl"}}>  
<a href={hebrew} style={{ color:"#a05344"}} download ><Icon name="download" size="big" style={styles.icon}/> הורדת קורות חיים </a> 
</div>
}

  {/* displays only on big screens */}
  <div className="contact-info-resume-big-screen"  >
  {props.chosen_language === "English"?
  
  <Grid centered  style={{position:"relative" ,left:"1%",color:"#a05344", fontFamily:"Calibri", textAlign:"center",}} > 
    <Grid.Row>
      <Grid.Column width={6}><Icon name="user" style={{color:"#463333"}}/> SHARON NISSANOV </Grid.Column>
      <Grid.Column style={{textAlign:"center", cursor:"pointer"}} width={2} onClick={()=>{window.open("mailto:sharon.nissanov@gmail.com?subject=Resume Sharon Nissanov&body=Hi Sharon, I would like to contact you regarding your resume.")}}> <Icon name="mail" style={styles.icon}/>MAIL</Grid.Column>
      <Grid.Column style={{textAlign:"center", cursor:"pointer"}} width={2} onClick={() => {window.open('https://www.linkedin.com/in/sharon-nissanov/')}}> <Icon name="linkedin" style={styles.icon}/> LINKEDIN</Grid.Column>
      <Grid.Column style={{textAlign:"center", cursor:"pointer"}} width={2} onClick={() => {window.open('https://github.com/sharonNissanov')}}> <Icon name="github" style={styles.icon}/> GITHUB</Grid.Column>
      <Grid.Column style={{textAlign:"center", cursor:"pointer"}} width={2} onClick={()=>{window.open("tel:+972525496864")}}> <Icon name="call" style={styles.icon}/> PHONE </Grid.Column>
      <Grid.Column style={{textAlign:"center", cursor:"pointer"}} width={2}>
      <a href={english} style={{color:"#a05344"}}  download > <Icon name="download" style={styles.icon}/><span className="download"> DOWNLOAD</span> </a>
    </Grid.Column>
    </Grid.Row> 
  </Grid>

    :
    /*--------------------------------------------HEBREW------------------------------------------------------ */
    <Grid  style={{position:"relative" ,color:"#a05344", fontFamily:"Calibri", textAlign:"center",direction:"rtl"}} > 
    <Grid.Row>
    <Grid.Column width={2}><Icon name="user" style={{color:"#463333"}}/> שרון ניסנוב </Grid.Column>
    <Grid.Column width={3}></Grid.Column>
      <Grid.Column style={{textAlign:"center", cursor:"pointer"}} width={2} onClick={()=>{window.open("mailto:sharon.nissanov@gmail.com?subject=קורות-חיים: שרון ניסנוב&body=היי שרון, אשמח ליצור איתך קשר בנוגע לקורות החיים שלך.")}}> <Icon name="mail" style={styles.icon}/> מייל</Grid.Column>
      <Grid.Column style={{textAlign:"center", cursor:"pointer"}} width={2} onClick={() => {window.open('https://www.linkedin.com/in/sharon-nissanov/')}}> <Icon name="linkedin" style={styles.icon}/> לינקדאין</Grid.Column>
      <Grid.Column style={{textAlign:"center", cursor:"pointer"}} width={2} onClick={() => {window.open('https://github.com/sharonNissanov')}}> <Icon name="github" style={styles.icon}/> גיטהאב</Grid.Column>
      <Grid.Column style={{textAlign:"center", cursor:"pointer"}} width={2} onClick={()=>{window.open("tel:+972525496864")}}> <Icon name="call" style={styles.icon}/> טלפון </Grid.Column>
      <Grid.Column style={{textAlign:"center", cursor:"pointer"}} width={2}>
      <a href={hebrew} style={{color:"#a05344"}}  download > <Icon name="download" style={styles.icon}/><span className="download"> הורדת קורות חיים</span> </a>
    </Grid.Column>
    
    </Grid.Row> 
  </Grid>
    }
  </div>


  <motion.div
  variants={containerVariants}
  initial="hiddenInfo"
  animate="visibleInfo"
  exit="exitInfo">

{ props.chosen_language === "English" ?
  <Grid style={{position:"relative" ,left:"1%",color:"#463333", fontFamily:"Calibri" }} stackable  centered>
  <Grid.Row>
      <Grid.Column width={7}><English_education/></Grid.Column>
      <Grid.Column width={9}><English_experience/></Grid.Column>
  </Grid.Row>

  <Grid.Row>
      <Grid.Column width={7}><English_skills/></Grid.Column>
      <Grid.Column width={9}><English_service/></Grid.Column>
  </Grid.Row>

    <Grid.Row>
      <Grid.Column width={7}><English_langueges/></Grid.Column>
      <Grid.Column width={9}></Grid.Column>
    </Grid.Row>

  </Grid>


:
/*--------------------------------------HEBREW--------DIFFERENT GRIDS----------------------------------------------------------------- */
<div>
<div className="hebrew_big_screen_grid">
<Grid style={{position:"relative" ,color:"#463333", fontFamily:"Calibri" ,}} stackable  centered >
<Grid.Row>
    <Grid.Column width={8}><Hebrew_experience/></Grid.Column>
    <Grid.Column width={7}><Hebrew_education/></Grid.Column>
</Grid.Row>

<Grid.Row>
    <Grid.Column width={8}><Hebrew_service/></Grid.Column>
    <Grid.Column width={7}><Hebrew_skills/></Grid.Column>
</Grid.Row>

  <Grid.Row>
    <Grid.Column width={8}></Grid.Column>
    <Grid.Column width={7}><Hebrew_langueges/></Grid.Column>
  </Grid.Row>

</Grid>
</div>
<div className="hebrew_small_screen_grid">
<Grid style={{position:"relative" ,color:"#463333", fontFamily:"Calibri" }} stackable  centered >
<Grid.Row>
    <Grid.Column width={8}><Hebrew_education/></Grid.Column>
    <Grid.Column width={7}><Hebrew_experience/></Grid.Column>
</Grid.Row>

<Grid.Row>
    <Grid.Column width={8}><Hebrew_skills/></Grid.Column>
    <Grid.Column width={7}><Hebrew_service/></Grid.Column>
</Grid.Row>

  <Grid.Row>
    <Grid.Column width={8}><Hebrew_langueges/></Grid.Column>
    <Grid.Column width={7}></Grid.Column>
  </Grid.Row>

</Grid>
</div>

</div>

}

  </motion.div>







{/* display only on small screens */}
 <div className="contact-info-resume-small-screen" >  
<br></br><br></br>
 
</div>


  </motion.div> 
  );


export default Resume;
 


const English_skills =()=> (
  <div style={{fontSize:"20px"}}>
    <span style={styles.healines} >SKILLS <br></br></span>
    <span style={styles.years} ><Icon name="angle double right" />Programming Languages:</span> C, C ++, Java.	<br></br>
    <span style={styles.years} ><Icon name="angle double right"/>Web Technologies:</span> HTML, CSS, JavaScript, React JS, Express JS, Node JS, Bootstrap, Material-UI, Semantic-UI, GitHub.<br></br>
    <span style={styles.years} ><Icon name="angle double right"/>Databases:</span> MongoDB.<br></br>
    <span style={styles.years} ><Icon name="angle double right"/>In-depth knowledge in</span> OO Programming, algorithms and data structures.<br></br>
    <span style={styles.years} ><Icon name="angle double right"/>Operating Systems:</span>  Linux, Windows.
  </div>
)
const Hebrew_skills =()=> (
  <div style={{fontSize:"20px", direction:"rtl", textAlign:"right"}}>
    <span style={styles.healines} >כלים וטכנולוגיות: <br></br></span>
    <span style={styles.years} ><Icon name="angle double left" />שפות תכנות:</span> C, C ++, Java.	<br></br>
    <span style={styles.years} ><Icon name="angle double left"/>טכנולוגיות אינטרנט: </span> HTML, CSS, JavaScript, React JS, Express JS, Node JS, Bootstrap, Material-UI, Semantic-UI, GitHub.<br></br>
    <span style={styles.years} ><Icon name="angle double left"/>בסיס נתונים:</span> MongoDB.<br></br>
    <span style={styles.years} ><Icon name="angle double left"/>ידע מעמיק </span> בתכנות מונחה עצמים, אלגוריתמים ומבני נתונים.<br></br>
    <span style={styles.years} ><Icon name="angle double left"/>מערכות הפעלה:</span>  Linux, Windows.
  </div>
)


const English_langueges =()=> (
  <div style={{fontSize:"20px"}}> 
  <span style={styles.healines} >LANGUEGES <br></br></span>
   <span style={styles.years} >Hebrew:</span>  Fluent  |     <span style={styles.years} > English:</span> Fluent.
</div>
)
const Hebrew_langueges =()=> (
  <div style={{fontSize:"20px", direction:"rtl", textAlign:"right"}}>
  <span style={styles.healines} >שפות <br></br></span>
   <span style={styles.years} >עברית:</span>  שוטפת  |     <span style={styles.years} > אנגלית:</span> שוטפת.
</div>
)


const English_service =()=> (
  <div style={{fontSize:"20px"}}>
  <span style={styles.healines} >NATIONAL SERVICE <br></br></span> 
  <span style={styles.years}>2015-2016:</span><span style={{color:"#a05344"}}> Medic </span>  in "Magen David Adom"<br></br>
  <Icon name="angle double right" />Qualified by paramedics and first aid course.<br></br>
  <Icon name="angle double right" />Escorting an ambulance and providing a quick and effective response to patients.
  </div>
)
const Hebrew_service =()=> (
  <div style={{fontSize:"20px", direction:"rtl", textAlign:"right"}}>
  <span style={styles.healines} >שירות לאומי <br></br></span> 
  <span style={styles.years}>2015-2016:</span><span style={{color:"#a05344"}}> חובשת </span> ב"מגן דוד אדום"<br></br>
  <Icon name="angle double left" />הסמכה על ידי חובשים וקורס עזרה ראשונה.<br></br>
  <Icon name="angle double left" />ליווי אמבולנס, מתן מענה מהיר ויעיל למטופלים ועבודה תחת לחץ.
  </div>
)



const English_experience =()=> (
  <div style={{fontSize:"20px"}}>
  <span style={styles.healines} >WORK EXPERIENCE <br></br></span> 
  <span style={styles.years}>2019-present:</span><span style={{color:"#a05344"}}> Control and Monitoring systems Operator </span>  at Tata Consultancy Services. <br></br>
  Tata Consultancy Services is a global leader in IT services, consulting & business solutions<br></br> and helped 
  bank Yahav achieve its strategic goal of moving to a modern global banking platform.<br></br>
  <Icon name="angle double right" />Use of Control-M automation program and Centerity monitoring system.<br></br>
  <Icon name="angle double right" />Provide system support to application and technical teams. <br></br>
  <Icon name="angle double right" />In charge of monitoring, controlling and operating computer systems, <br></br>
  data analysis and trouble shooting.<br></br>
  <Icon name="angle double right" />Role Requirements: fluent English, responsibility, strong interpersonal and communication skills. <br></br><br></br>                                                                                                               
  
  <span style={styles.years}>2019-2020:</span><span style={{color:"#a05344"}}> Teaching Assistant </span> at course: "C and C ++ programming".<br></br>
  <Icon name="angle double right" />Checking the code for each exercise.<br></br>
  <Icon name="angle double right" />Identifying bugs in code and understanding error messages.<br></br>
  <Icon name="angle double right" />Grading course assignments.<br></br>
  <Icon name="angle double right" />Role Requirements: responsibility, meeting deadlines, punctuality. 
  </div>
)
const Hebrew_experience =()=> (
  <div style={{fontSize:"20px", direction:"rtl", textAlign:"right"}}>
  <span style={styles.healines} >ניסיון מקצועי <br></br></span> 
  <span style={styles.years}>היום-2019:</span><span style={{color:"#a05344"}}> בקרית מערכות שליטה וניטור </span>  בחברת Tata Consultancy Services. <br></br>
  חברת TCS הינה מובילה עולמית בתחום שירותי IT, ייעוץ ופתרונות עסקיים <br></br> 
  וסייעה לבנק יהב להשיג את מטרתו האסטרטגית לעבור לפלטפורמה בנקאית גלובאלית מודרנית.<br></br>
  <Icon name="angle double left" />שימוש בתוכנת האוטומציה Control-M ובמערכת Centerity.<br></br>
  <Icon name="angle double left" />מתן תמיכה טכנית לצוותי האפליקציה ולצוותים השונים.<br></br>
  <Icon name="angle double left" />ניטור, בקרה והפעלה של מערכות מחשב, ניתוח נתונים וטיפול בתקלות. <br></br>
  <Icon name="angle double left" />דרישות התפקיד: אנגלית שוטפת בכתב ובע"פ, אחריות, הגדלת ראש, כישורים בינאישיים מצוינים. <br></br><br></br>                                                                                                               
  
  <span style={styles.years}>2019-2020:</span><span style={{color:"#a05344"}}> עוזרת הוראה</span> בקורס "תכנות C ו- C++".<br></br>
  <Icon name="angle double left" />בדיקת הקוד לכל תרגיל.<br></br>
  <Icon name="angle double left" />זיהוי באגים בקוד והבנת הודעות שגיאה.<br></br>
  <Icon name="angle double left" />ציון מטלות קורס.<br></br>
  <Icon name="angle double left" />דרישות תפקיד: אחריות, עמידה בלוחות זמנים.
  </div>
)



const English_education = () => (
  <div style={{fontSize:"20px"}}>
    <span style={styles.healines} >EDUCATION <br></br></span>
    <span style={styles.years}><Icon name="angle double right" />2019-2020:</span> Teaching Assistant at Azrieli College of Engineering.<br></br>
    <span style={styles.years}><Icon name="angle double right" />2016-2020:</span> B.Sc. Software Engineering at
    <span > Azrieli College of Engineering Jerusalem, <span style={styles.grade}>GPA: 89.</span> <br></br> </span>
     
    <div style={{marginLeft:"20px"}}> 
    <span style={styles.years}>Projects: <br></br></span>
    <Icon name="angle right"/>Final project: developing a <a href=" https://github.com/sharonNissanov/CountDownSystem" target="_blank" rel="noreferrer" 
    style={{fontWeight:500,textDecoration :"underline",color:"#a05344"}}>real-time web application</a> for a security organization.
    Its purpose is to plan and monitor a classified security procedure. <span style={styles.grade}>Final grade: 94.</span> <br></br>
    Client side: ReactJS, React-Redux, JavaScrpit, CSS, HTML.<br></br>
    Server side: NodeJS, Express.js, Socket.io, MongoDB.<br></br>

    <Icon name="angle right" />Developing a <a href="https://mashlimim.co.il/" target="_blank" rel="noreferrer"
    style={{fontWeight:500,textDecoration :"underline",color:"#a05344"}} >WordPress site</a> for "Complementary to Education" Association,
    which helps children who don’t have family support. <br></br>
    </div>

    <span style={styles.years }><Icon name="angle double right" />2016-2018:</span> Multicultural Women Leadership Mentor.<br></br>
    Worked weekly with female high school students to enhance their <br></br>
    achievements in the job market and empowering them.
  </div>
)
const Hebrew_education = () => (
  <div style={{fontSize:"20px", direction:"rtl", textAlign:"right"}}>
    <span style={styles.healines} >השכלה <br></br></span>
    <span style={styles.years}><Icon name="angle double left" />2019-2020:</span>   עוזרת הוראה במכללה האקדמאית להנדסה. <br></br>   
    <span style={styles.years}><Icon name="angle double left" />2016-2020:</span> תואר ראשון B.Sc. בהנדסת תוכנה במכללה האקדמאית להנדסה, 
    <span style={styles.grade}> ממוצע: 89. </span>
    <div style={{marginRight:"20px"}}> 
    <span style={styles.years}>פרויקטים:<br></br></span>
    <Icon name="angle left"/>פרויקט גמר: פיתוח <a href=" https://github.com/sharonNissanov/CountDownSystem" target="_blank" rel="noreferrer" 
    style={{fontWeight:500,textDecoration :"underline",color:"#a05344"}}>מערכת וובית הפועלת בזמן אמת</a> עבור אירגון בטחוני.<br></br>
 
    מטרת המערכת הינה לתכנן ולעקוב אחר הליך בטחוני מסווג. <span style={styles.grade}>ציון סופי: 94.</span> <br></br>
    צד לקוח: ReactJS, React-Redux, JavaScrpit, CSS, HTML.<br></br>
    צד שרת: NodeJS, Express.js, Socket.io, MongoDB.<br></br>
    
    <Icon name="angle left" />פיתוח <a href="https://mashlimim.co.il/" target="_blank" rel="noreferrer"
    style={{fontWeight:500,textDecoration :"underline",color:"#a05344"}} >אתר WordPress</a> עבור עמותת "משלימים לחינוך"
    המסייעת לילדים חסרי עורף משפחתי.<br></br><br></br>
    </div>
    <span style={styles.years }><Icon name="angle double left" />2016-2018:</span> חונכת בתוכנית "מנהיגות נשים רב-תרבותית":<br></br>
    פגישות שבועיות עם תלמידות תיכון שמטרתן לשפר את הישגיהן בשוק העבודה ולהעצימן.

  </div>
  )

  