import * as React from 'react';
import HeaderApp from '../components/headerApp';

interface MainPropsI {
  children: Object;
}

class Main extends React.Component<MainPropsI, {}> {
  constructor(props: MainPropsI) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderApp
          title="Infinity"
          menuItems={['M1', 'M2']}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
