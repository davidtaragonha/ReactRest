import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import GroupGrid from '../components/groupGrid';

class GroupCardContainer extends React.Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <Card>
       <CardHeader
         title="GroupGrid"
         subtitle="Maintenance"
       />
       <CardText>
           <GroupGrid />
       </CardText>
       <CardActions>
       </CardActions>
     </Card>
    );
  }
}

export default GroupCardContainer;
