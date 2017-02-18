import * as React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {Avatar} from 'material-ui';
import ImageGroup from 'material-ui/svg-icons/image/grain';
import GroupGrid from '../components/groupGrid';
import {connect} from 'react-redux';
import {StateI} from '../store/initialState';
import {loadGroups} from '../actions/groupAction';
import {GroupStateI} from '../reducers/groupReducer';

interface ContainerPropsI {
  group: GroupStateI;
  loadGroups: Function;
};

class GroupCardContainer extends React.Component<ContainerPropsI, {}> {
  componentDidMount() {
    this.props.loadGroups();
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
           <GroupGrid store={this.props.group.list}/>
       </CardText>
     </Card>
    );
  }
}

function mapStateToProps(state: StateI): Object {
  return {
    group: state.group
  };
}

export default connect(mapStateToProps, {loadGroups})(GroupCardContainer);
