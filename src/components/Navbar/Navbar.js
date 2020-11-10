import React, { Component } from 'react';

import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';


class Navbar extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%',zIndex: "400" , position:"absolute"}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} chosen_language={this.props.chosen_language} />
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} chosen_language={this.props.chosen_language}/>
        {backdrop}    
      </div>
    );
  }
}

export default Navbar;
