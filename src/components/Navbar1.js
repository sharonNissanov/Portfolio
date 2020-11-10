
import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { StylesContext } from '@material-ui/styles';
import {isBrowser} from "react-device-detect"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


export default class Navbar1 extends Component {

 
  state = { activeItem: 'Home',
  click:false,
}


  change_languege=()=>{
  
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


  render() {



    return (
    <Navbar  collapseOnSelect expand="lg" className="navbar"  variant="light">
      <Navbar.Brand href="/">Sharon Nissanov</Navbar.Brand >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="mr-auto" >
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href="/">עברית</Nav.Link>
          {/* <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

   
    )
  }
}  














