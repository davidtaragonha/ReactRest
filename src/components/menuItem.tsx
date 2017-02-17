import * as React from 'react';
import {MenuItem as MenuItemUI} from 'material-ui';

interface MenuItemPropsI {
  name: string;
  path: string;
  onTouchTap: Function;
}

class MenuItem extends React.Component<MenuItemPropsI, {}> {
  handleTouchTap= (event: Object) => {
    this.props.onTouchTap(this.props.path);
  }

  render() {
    return (
      <MenuItemUI
        onTouchTap={this.handleTouchTap}
      >
        {this.props.name}
      </MenuItemUI>
    );
  }
}

export default MenuItem;
