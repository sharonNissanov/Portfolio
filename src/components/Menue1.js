import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { StylesContext } from '@material-ui/styles';
import {isBrowser} from "react-device-detect"

export default class Menu1 extends Component {

 
  state = { activeItem: 'Home',
  click:false,
}


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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

   handleEnter=()=>{
    this.setState({click: !this.state.click})
  }
  handleClick=(name)=>{
    this.setState({click: name})
  }

  render() {


    const { activeItem, click } = this.state

    return (
// style={styles.navbar} 
  

   /* <Menu borderless compact stackable  attached="top" pointing >
     
          <Menu.Item
         name='Home'
         position="right"
         active={activeItem === 'Home'} 
         onClick={this.handleItemClick}
 
      > <Link to="/" >HOME  </Link></Menu.Item>
       <Menu.Item
        name='About'
        position="right"
       onClick={this.handleItemClick}
       active={activeItem === 'About'}
        
       > <Link to="/about" >About  </Link></Menu.Item> 
       <Menu.Item
       name='Resume'
       position="right"
       onClick={this.handleItemClick}
       active={activeItem === 'Resume'}
     
     ><Link to="/resume" >Resume  </Link></Menu.Item> 
       <Menu.Item
       position="right"
       active={activeItem === 'Portfolio'}
       onClick={this.handleItemClick}
       name='Portfolio'
         ><Link to="/portfolio" >Portfolio  </Link></Menu.Item> 
       <Menu.Item
       position="right"
       onClick={this.handleItemClick}  
       name='Contact'
       active={activeItem === 'Contact'}
 
       ><Link to="/contact" >Contact  </Link></Menu.Item> 
        <Menu.Item 
       name='change Languege'
       active={activeItem === 'change'}
       onClick={this.change_languege}
       href="/"
     /> 
      </Menu> */
  isBrowser ?
    <div  style={ styles.navbar }   >
      <Link to="/"  style={window.location.pathname==="/" ? styles.links : styles.link_clicked} onClick={()=>this.handleClick("HOME")}  >HOME</Link>
      <Link to="/about" style={window.location.pathname==="/about" ? styles.links : styles.link_clicked} onClick={()=>this.handleClick("ABOUT")}>ABOUT</Link>
      <Link to="/resume" style={window.location.pathname==="/resume" ? styles.links : styles.link_clicked} onClick={()=>this.handleClick("RESUME")}>RESUME</Link>
      <Link to="/portfolio" style={window.location.pathname==="/portfolio" ? styles.links : styles.link_clicked} onClick={()=>this.handleClick("PORTFOLIO")}>PORTFOLIO</Link>
      <Link to="/contact" style={window.location.pathname==="/contact"? styles.links : styles.link_clicked} onClick={()=>this.handleClick("CONTACT")}>CONTACT</Link>
      </div>
      :"helloooo"
  
      
    )
  }
}  

const styles={
  navbar:{
    position:"absolute",
    top:"6%",
    left: isBrowser?"10%":"10%",
    fontSize:isBrowser?"20px":"15px",
    zIndex:"1",
    fontWeight:"bold",
    paddingRight:isBrowser?"20px":"5px",
    
  },
  links:{
    paddingRight:"20px",
    color:"#835858",
    textDecoration: "underline"
  },
  link_clicked:{
    paddingRight:"20px",
    color:"#3b2b2b",
   
  }

}


    //   <Menu borderless compact stackable  attached="top" pointing >
     
    //     <Menu.Item
    //     name='Home'
    //     position="right"
    //     active={activeItem === 'Home'} 
    //     onClick={this.handleItemClick}

    //  > <Link to="/" >HOME  </Link></Menu.Item>
    //   <Menu.Item
    //    name='About'
    //    position="right"
    //   onClick={this.handleItemClick}
    //   active={activeItem === 'About'}
       
    //   > <Link to="/about" >About  </Link></Menu.Item> 
    //   <Menu.Item
    //   name='Resume'
    //   position="right"
    //   onClick={this.handleItemClick}
    //   active={activeItem === 'Resume'}
    
    // ><Link to="/resume" >Resume  </Link></Menu.Item> 
    //   <Menu.Item
    //   position="right"
    //   active={activeItem === 'Portfolio'}
    //   onClick={this.handleItemClick}
    //   name='Portfolio'
    //     ><Link to="/portfolio" >Portfolio  </Link></Menu.Item> 
    //   <Menu.Item
    //   position="right"
    //   onClick={this.handleItemClick}  
    //   name='Contact'
    //   active={activeItem === 'Contact'}

    //   ><Link to="/contact" >Contact  </Link></Menu.Item> 
      /* <Menu.Item 
      // position="right"
      name='change Languege'
      active={activeItem === 'change'}
      onClick={this.change_languege}
      href="/"
    /> */
    // </Menu>