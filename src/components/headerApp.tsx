import * as React from 'react';
import {AppBar} from 'material-ui';
import {Drawer} from 'material-ui';
import {MenuItem} from 'material-ui';

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
  }

  handleShowMenu (event: Object) {
    this.setState((prevState, props) => {
      return {open: !prevState.open};
    });
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
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>Menu 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default HeaderApp;
