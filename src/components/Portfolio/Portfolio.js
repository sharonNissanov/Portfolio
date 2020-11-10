import React from 'react'
import { Image,Icon, Grid} from 'semantic-ui-react'
import data from './Data'
import { motion } from 'framer-motion';


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
    x: "100vh",
    transition: { ease: 'easeInOut' }
  },

};
const Portfolio = (props) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="Portfolio" 
  > 
  <br></br><br></br><br></br><br></br> 


  <span style={{fontSize:"2rem"}}>{props.chosen_language==="English" ? "MY WORK" : "העבודות שלי" }</span>
  <br></br><br></br><br></br> 
    {props.chosen_language==="English" ? <English_work/> :<Hebrew_work/>}


    </motion.div>
)

const Hebrew_work = () => (
  <Grid textAlign="right" style={{width:"80%" ,position:"absolute" , left:"10%", direction:"rtl"}} stackable>
  {data.map((data)=>
  (
  <>
    <Grid.Row className="Card">
    <Grid.Column width={8} >
        <Image className="portfolio-image" alt={data.name} src={data.picture} centered  />
      </Grid.Column>

    <Grid.Column width={8}>
      <p style={{fontSize:"19px"}}> 
        <span style={{fontWeight:"bold", fontSize:"25px"}}>{data.hebrew_name} </span> 
        <div className="project-info">

        <br></br>{ data.hebrew_descrition&& data.hebrew_descrition }
        {data.description_hebrew1 && <> {data.description_hebrew1} <a target="_blank" href={data.site} rel="noreferrer" >{data.site} </a>{data.description_hebrew2}  </>}  
        <br></br><br></br>

        {data.frontend && <><span style={{fontWeight:"bold"}}>צד לקוח: </span>{data.frontend}  <br></br> </>}
        {data.backend && <> <span style={{fontWeight:"bold"}}>צד שרת: </span>{data.backend}  </>}
        <br></br> <br></br>
        </div>
        {data.git  && 
        <a href={data.git} target="_blank" rel="noreferrer">
          <Icon name='github' /> גיטהאב  <br></br>
        </a> }
        
        {data.link &&
        <a href={data.link} target="_blank" rel="noreferrer">
          <Icon name='eye' /> הדגמה   <br></br>
        </a>}
        <a target="_blank" href={data.hebrew_message  }  rel="noreferrer" >
          <Icon name='chat' /> בואו נדבר על הפרויקט הזה     
        </a>
      </p>
    </Grid.Column>
   
    </Grid.Row>
    <Grid.Row>  <div className="space" /> </Grid.Row>
    </>
      ))
    }
    </Grid>
)



const English_work = () => (
  <Grid textAlign="left" style={{width:"80%" ,position:"absolute" , left:"13%", }} stackable>
  {data.map((data)=>
  (
  <>
    <Grid.Row className="Card">
      <Grid.Column width={8} >
        <Image className="portfolio-image" alt={data.name} src={data.picture} centered  />
      </Grid.Column>
    <Grid.Column width={8}>
      <p style={{fontSize:"19px"}}> 
        <span style={{fontWeight:"bold", fontSize:"25px"}}>{data.english_name} </span> 
        <div className="project-info">

       
        <br></br>{ data.english_description && data.english_description } 
         {data.description1 && <> {data.description1} <a target="_blank" href={data.site} rel="noreferrer" >{data.site} </a>{data.description2}  </>}  
        <br></br><br></br>
        {data.frontend && <> <span style={{fontWeight:"bold"}}>Client side:</span> {data.frontend}<br></br> </>}
        {data.backend && <> <span style={{fontWeight:"bold"}}>Server side:</span> {data.backend} </>}
        <br></br> <br></br>
        </div>
        {data.git  && 
        <a href={data.git} target="_blank" rel="noreferrer">
          <Icon name='github' />GIT  <br></br>
        </a> }
        
        {data.link &&
        <a href={data.link} target="_blank" rel="noreferrer">
          <Icon name='eye' />DEMO  <br></br>
        </a>}
        <a target="_blank" href={data.message}  rel="noreferrer" >
          <Icon name='chat' />Let's talk about this project      
        </a>
      </p>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row>  <div className="space" /> </Grid.Row>
    </>
      ))
    }
    </Grid>
)

export default Portfolio


