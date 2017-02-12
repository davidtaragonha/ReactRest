import * as React from 'react';
import {AppBar} from 'material-ui';
import {Drawer} from 'material-ui';
import {MenuItem} from 'material-ui';
import {browserHistory} from 'react-router';

interface HeaderPropsI {
  title: string;
  menuItems: Array<string>;
}

interface HeaderStateI {
  open: boolean;
}

/*TODO -> RENDER MENUITEMS*/
class HeaderApp extends React.Component<HeaderPropsI, HeaderStateI> {
  constructor(props: HeaderPropsI) {
    super(props);
    this.state = {open: false};
    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.handleNavItem = this.handleNavItem.bind(this);
  }

  handleShowMenu (event: Object) {
    this.setState((prevState, props) => {
      return {open: !prevState.open};
    });
  }

  handleNavItem (event: Object) {
    browserHistory.replace('/main/specimens');
    this.setState({open: false});
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
          <MenuItem onTouchTap={this.handleNavItem}>Specimens</MenuItem>
          <MenuItem>Menu 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default HeaderApp;
