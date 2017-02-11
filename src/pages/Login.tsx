import * as React from 'react';
import {RaisedButton} from 'material-ui';
import {TextField} from 'material-ui';

class Login extends React.Component<{}, {}> {
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
        <RaisedButton label="Sign in" />
      </div>
    );
  }
}

export default Login;
