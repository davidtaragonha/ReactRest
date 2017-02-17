import * as React from 'react';
import {AppBar} from 'material-ui';
import {Drawer} from 'material-ui';
import MenuItem from './menuItem';
import {browserHistory} from 'react-router';

interface HeaderPropsI {
  title: string;
  menuItems: Array<
    {
      name: string;
      path: string;
    }
  >;
}

interface HeaderStateI {
  open: boolean;
}

class HeaderApp extends React.Component<HeaderPropsI, HeaderStateI> {
  constructor(props: HeaderPropsI) {
    super(props);
    this.state = {open: false};
  }

  handleShowMenu = (event: Object) => {
    this.setState((prevState, props) => {
      return {open: !prevState.open};
    });
  }

  handleNavItem = (path: string) => {
    browserHistory.replace(path);
    this.setState({open: false});
  }

  renderRows() {
    return this.props.menuItems.map(item =>
      <MenuItem
        {...item}
        key={item.name}
        onTouchTap={this.handleNavItem}
      />
    );
  }

  render() {
    return (
      <div>
        <AppBar
         title={this.props.title}
         onLeftIconButtonTouchTap={this.handleShowMenu}
        />
        <Drawer
         docked={false}
         width={200}
         open={this.state.open}
         onRequestChange={(open) => this.setState({open})}
        >
          {this.renderRows()}
        </Drawer>
      </div>
    );
  }
}

export default HeaderApp;
