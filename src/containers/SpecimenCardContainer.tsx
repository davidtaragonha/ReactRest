import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import SpecimenGrid from '../components/specimenGrid';

class SpecimenCardContainer extends React.Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <Card>
       <CardHeader
         title="Specimens"
         subtitle="Management"
       />
       <CardText>
           <SpecimenGrid />
       </CardText>
       <CardActions>
       </CardActions>
     </Card>
    );
  }
}

export default SpecimenCardContainer;
