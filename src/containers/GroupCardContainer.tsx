import * as React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {Avatar} from 'material-ui';
import ImageGroup from 'material-ui/svg-icons/image/grain';
import GroupGrid from '../components/groupGrid';

class GroupCardContainer extends React.Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <Card>
       <CardHeader
         title="Groups"
         subtitle="Maintenance"
         avatar= {<Avatar icon={<ImageGroup />} />}
       />
       <CardText>
           <GroupGrid />
       </CardText>
     </Card>
    );
  }
}

export default GroupCardContainer;
