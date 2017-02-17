import * as React from 'react';
import {Table, TableBody, TableHeader} from 'material-ui/Table';
import {TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class GroupGrid extends React.Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  renderRows(): JSX.Element {
    return (
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
    );
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

export default GroupGrid;
