import React, { Component } from 'react';
import {hashHistory} from 'react-router';
// import logo from './logo.svg';
import './App.css';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {Link} from 'react-router'
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconHome from 'material-ui/svg-icons/action/home'
import IconToys from 'material-ui/svg-icons/hardware/toys'

const nearbyIcon = <IconLocationOn />;
const homeIcon = <IconHome />;
const toyIcon = <IconToys />;

class AppRoot extends Component {
  state = {
    selectedIndex: 0,
  };


  getIndex(){
    switch(this.props.location.pathname){
      case '/app':
        return 0;
      case '/app/makers':
        return 1;
      case '/app/map':
        return 2;
      default:
        return 0;
    }
  }
  render() {
    console.log("rendering")
    return (
      <div>
      {this.props.children}
      <Paper zDepth={1} className="App-footer">
        <BottomNavigation selectedIndex={this.getIndex()}>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onTouchTap={() => hashHistory.push("/app")}
          />
          <BottomNavigationItem
            label="Makers"
            icon={toyIcon}
            onTouchTap={() => hashHistory.push("/app/makers")}
          />
          <BottomNavigationItem
            label="Map"
            icon={nearbyIcon}
            onTouchTap={() => hashHistory.push("/app/map")}
          />
        </BottomNavigation>
      </Paper>
      </div>
    )
  }
}

export default AppRoot;
