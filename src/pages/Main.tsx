import * as React from 'react';
import {AppBar} from 'material-ui';

interface MainPropsI {
  children: Object;
}

class Main extends React.Component<MainPropsI, {}> {
  render() {
    return (
      <div>
        <AppBar
         title="Title"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
