import React from "react";
import { Route, Switch, useLocation  } from "react-router-dom";
import Header from "./components/Header";
import Particles from "./components/Particles";
import Navbar1 from "./components/Navbar1";
import Menue1 from "./components/Menue1";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume";
import { AnimatePresence } from 'framer-motion';

import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const location = useLocation();
  const [chosen_language , setChosen_language] = React.useState(null)

  React.useEffect(() => {
  {
    try{ 
      const check_lan = localStorage.getItem("Language");
       if(check_lan===null)
       {   
         localStorage.setItem("Language", "English");
       }
       if(check_lan!==null)
       {   
        setChosen_language(check_lan)
       }

     }catch(e){
         console.log(e)
       } 
    }
     },); 
 

  return(
    <>
    <Navbar chosen_language={chosen_language}/> 
    <AnimatePresence exitBeforeEnter >
      <Switch location={location} key={location.key}>
        <Route exact path="/"> 
          <Header chosen_language={chosen_language}/>
        </Route>
        <Route path="/about">
          <About chosen_language={chosen_language}/>
        </Route>
        <Route path="/contact">
          <Contact chosen_language={chosen_language}/>
        </Route>
        <Route path="/portfolio">
          <Portfolio chosen_language={chosen_language}/>
        </Route>
        <Route path="/resume">
          <Resume chosen_language={chosen_language}/>
        </Route>

        
      </Switch>
    </AnimatePresence>
  </>
 );
}




