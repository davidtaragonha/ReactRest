import * as React from 'react';
import GroupCardContainer from '../containers/GroupCardContainer';

class Groups extends React.Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <GroupCardContainer />
    );
  }
}

export default Groups;
