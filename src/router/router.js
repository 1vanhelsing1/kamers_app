import React from 'react'
import AppRoot from '../AppRoot'
import HomeScreen from '../components/home/HomeScreen'
import MakersScreen from '../components/makers/MakersScreen'
import MapScreen from '../components/map/MapScreen'
import LoginScreen from '../components/admin/LoginScreen'
import EventComponent from '../components/admin/EventComponent'
import MakersComponent from '../components/admin/MakersComponent'
import MapAdminComponent from '../components/admin/MapAdminComponent'
import AdminRoot from '../components/admin/AdminRoot'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import firebase from '../firebase/firebase';
//middleware for auth
var requireLogin = (nextState, replace, next) => {
  //check if user is logged in
  if(!firebase.auth().currentUser) {
    replace('/login')
  }
  next();
};

//if logged in
var requireLoggedOut = (nextState, replace, next) => {
  if(firebase.auth().currentUser) {
    replace('/admin')
  }
  next();
};

export default (
  <div>
  <Router history={hashHistory}>
    {/*Main component will always be rendered*/}
    <Route path="/">
    <Route path="admin" component={AdminRoot} onEnter={requireLogin}>
      <IndexRoute component={EventComponent} />
      <Route path="makers" component={MakersScreen} />
      <Route path="map" component={MapAdminComponent} />
    </Route> 
    <Route path="login" component={LoginScreen} onEnter={requireLoggedOut}/>
    <Route path="app" component={AppRoot}>
      //default index route takes you to choose your active
      <IndexRoute component={HomeScreen} />
      <Route path="makers" component={MakersScreen} />
      <Route path="map" component={MapScreen}/>
    </Route>  
    </Route>
  </Router>
  </div>

)
