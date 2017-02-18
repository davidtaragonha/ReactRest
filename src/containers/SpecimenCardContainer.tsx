import * as React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {Avatar, FloatingActionButton} from 'material-ui';
import ImageSpecimen from 'material-ui/svg-icons/image/blur-circular';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SpecimenGrid from '../components/specimenGrid';
import {connect} from 'react-redux';
import {StateI, SpecimenStateI} from '../store/initialState';
import {loadSpecimens} from '../actions/specimenAction';

interface ContainerPropsI {
  specimen: SpecimenStateI;
  loadSpecimens: Function;
};

class SpecimenCardContainer extends React.Component<ContainerPropsI, {}> {
  componentDidMount() {
    this.props.loadSpecimens();
  }

  render() {
    return (
      <Card>
       <CardHeader
         title="Specimens"
         subtitle="Maintenance"
         avatar= {<Avatar icon={<ImageSpecimen />} />}
       />
       <CardText>
         <SpecimenGrid store={this.props.specimen.list}/>
         <FloatingActionButton>
          <ContentAdd />
        </FloatingActionButton>
       </CardText>
     </Card>
    );
  }
}

function mapStateToProps(state: StateI): Object {
  return {
    specimen: state.specimen
  };
}

export default connect(mapStateToProps, {loadSpecimens})(SpecimenCardContainer);
