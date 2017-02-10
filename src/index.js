import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import router from './router/router'
import {Provider}  from 'react-redux'
import {configure} from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

var store = configure();


ReactDOM.render(
<Provider store={store}>
  <MuiThemeProvider>
  	{router}
  </MuiThemeProvider>
</Provider>,
  document.getElementById('root')
);
