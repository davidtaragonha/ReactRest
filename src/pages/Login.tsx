import * as React from 'react';
import {RaisedButton} from 'material-ui';
import {TextField} from 'material-ui';
import {browserHistory} from 'react-router';

class Login extends React.Component<{}, {}> {
  constructor(props: Object) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn() {
    browserHistory.replace('/main');
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Username"
          floatingLabelText="Username"
        />
        <br />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        />
        <br />
        <RaisedButton label="Sign in" onClick={this.handleSignIn}/>
      </div>
    );
  }
}

export default Login;
