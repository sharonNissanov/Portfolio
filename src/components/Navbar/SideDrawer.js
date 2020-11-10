import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ContactMenu from './ContactMenu'


function change_languege(){
  try{ 
    const check_lan = localStorage.getItem("Language");
    if(check_lan==="English")
    { 
      localStorage.removeItem("Language") 
      localStorage.setItem("Language", "Hebrew");
    }
    if(check_lan==="Hebrew")
    {
      localStorage.removeItem("Language") 
      localStorage.setItem("Language", "English");
    }
   window.location.reload()
  }  

     catch(e){
       console.log(e)
   }
}

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  let about="ABOUT";
  let resume="RESUME";
  let portfolio="PORTFOLIO";
  let contact="CONTACT";
  let language="עברית";

  if(props.chosen_language==="Hebrew"){
    about="על עצמי";
    resume="קורות חיים";
    portfolio="תיק עבודות";
    contact="יצירת קשר";
    language="English";
  }

  return (
    <nav className={drawerClasses} onClick={props.click}>
      <header style={{fontSize:"24px",padding:"1rem 1rem", cursor:"pointer", fontWeight:"bold"}} onClick={props.click}> X </header>
      <ul>
        <li><Link to="/about">{about}</Link></li>
        <li><Link to="/resume">{resume}</Link></li>
        <li><Link to="/portfolio">{portfolio}</Link></li>
        <li><Link to="/contact">{contact}</Link></li>
        <li onClick={change_languege}><Link to="/" >{language}</Link></li>
      </ul>

      <ContactMenu chosen_language={props.chosen_language}/>
    </nav>
  );
};

export default sideDrawer;