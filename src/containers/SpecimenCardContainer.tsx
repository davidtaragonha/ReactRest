import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
         subtitle="Maintenance"
       />
       <CardText>
         <SpecimenGrid />
         <FloatingActionButton>
          <ContentAdd />
        </FloatingActionButton>
       </CardText>
       <CardActions>
       </CardActions>
     </Card>
    );
  }
}

export default SpecimenCardContainer;
