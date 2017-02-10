import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import * as actions from '../../actions/actions';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


class AdminRoot extends Component {

  constructor(props) {
    super(props);
  
    this.handleLogout = this.handleLogout.bind(this);
    this.handleActive = this.handleActive.bind(this);
  }

  handleActive(tab) {
  	hashHistory.push(tab.props['data-route']);
	}
 

  handleLogout(event) {
  	event.preventDefault();
    let {dispatch}  = this.props;
    dispatch(actions.logout());
  }

  getIndex(){
    switch(this.props.location.pathname){
      case '/admin':
        return 'a';
      case '/admin/makers':
        return 'b';
      case '/admin/map':
        return 'c';
      default:
        return 'a';
    }
  }


  render() {
  	var styles = {
		  appBar: {
		    flexWrap: 'wrap',
		  },
		  tabs: {
		    width: '100%',
		  },
		  button: {
		  	color: 'white',
		  }
		};
  	var AdminTabs = () => { return (
		  <Tabs style={styles.tabs} value={this.getIndex()}>
		    <Tab 
		    	onActive={this.handleActive}
		    	value="a"
		    	label="Event"
		    	data-route="/admin" 
		    />
		    <Tab 
		    	onActive={this.handleActive}
		    	value="b"
		    	label="Makers" 
		    	data-route="/admin/makers"
		    />
		    <Tab
		    	onActive={this.handleActive}
		    	value="c"
		      label="Map"
		      data-route="/admin/map"
		    />
		  </Tabs>
			)
		};

    return (
	    <div>
			  <AppBar
			  	style={styles.appBar}
			    showMenuIconButton={false}
			  >
			      <ToolbarGroup style={styles.tabs}>
		          {AdminTabs()}
		          <FlatButton label="Logout" secondary={true} onClick={this.handleLogout} />
		        </ToolbarGroup>

			  </AppBar>
			  {this.props.children}
	    </div>
    )
	} 
}

export default connect()(AdminRoot);
