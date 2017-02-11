import * as React from 'react';

interface AppPropsI {
  children: Object;
}

class App extends React.Component<AppPropsI, {}> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
