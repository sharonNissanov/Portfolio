import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import './Navbar.css';
import { Link } from 'react-router-dom';


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


const toolbar = props => {
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

  return(
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><Link to="/">Sharon Nissanov</Link></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><Link to="/about">{about}</Link></li>
                <li><Link to="/resume">{resume}</Link></li>
                <li><Link to="/portfolio">{portfolio}</Link></li>
                <li><Link to="/contact">{contact}</Link></li>
                <li onClick={change_languege}><Link to="/" >{language}</Link></li>
            </ul>
        </div>
    </nav>
  </header>
  )

};

export default toolbar;