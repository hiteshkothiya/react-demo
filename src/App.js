import React, { Component } from 'react';
import './App.css';

import Person from './components/Person/Person';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render(){
    //let sideDrawer;
    let backDrop;

    if(this.state.sideDrawerOpen){
      //sideDrawer = <SideDrawer />;
      backDrop = <Backdrop click={this.backDropClickHandler} />;
    }

    return (
      <div className="Wrapper">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <Person />
      </div>
    );
  }
}

export default App;
