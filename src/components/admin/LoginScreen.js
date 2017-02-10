import  React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../../actions/actions'


export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    };
    //this.onLogout = this.onLogout.bind(this);
    this.login = this.login.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  // onLogout(e) {
  //   e.preventDefault();
  //   var {dispatch}  = this.props;
  //   dispatch(actions.startLogout());
  // }
  handleEmailChange(event, newValue) {
    this.setState({email: newValue});
  }

  handlePasswordChange(event, newValue){
    this.setState({password: newValue});
  }

  login(event) {
    event.preventDefault();
    let {dispatch}  = this.props;
    dispatch(actions.startLogin(this.state.email, this.state.password));
  }
  
  render() {
    return(
      <form className="commentForm" onSubmit={this.login}>
        <TextField
          floatingLabelText="Email"
          onChange={this.handleEmailChange}
        /><br />
        <TextField
          floatingLabelText="Password"
          type="password"
          onChange={this.handlePasswordChange}
        />
        <RaisedButton label="Login" primary={true} type="submit" />
      </form>
    )
  }
}
export default connect()(LoginScreen);
