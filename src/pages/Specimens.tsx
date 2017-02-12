import * as React from 'react';
import SpecimenCardContainer from '../containers/SpecimenCardContainer';

class Specimens extends React.Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <SpecimenCardContainer />
    );
  }
}

export default Specimens;
