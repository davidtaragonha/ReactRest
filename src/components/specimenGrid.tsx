import * as React from 'react';
import {Table, TableBody, TableHeader} from 'material-ui/Table';
import {TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {SpecimenViewI} from '../store/initialState';

interface GridPropsI {
  store: Array<SpecimenViewI>;
};

class SpecimenGrid extends React.Component<GridPropsI, {}> {
  renderRows(): JSX.Element[] {
    return this.props.store.map(item => {
        return (
          <TableRow key={item.id}>
            <TableRowColumn>{item.id}</TableRowColumn>
            <TableRowColumn>{item.name}</TableRowColumn>
            <TableRowColumn>{item.name}</TableRowColumn>
          </TableRow>
        );
    });
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderRows()}
        </TableBody>
      </Table>
    );
  }
}

export default SpecimenGrid;
