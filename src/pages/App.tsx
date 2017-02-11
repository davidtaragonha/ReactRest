import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

interface AppPropsI {
  children: Object;
}

class App extends React.Component<AppPropsI, {}> {
  render() {
    return (
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default App;
