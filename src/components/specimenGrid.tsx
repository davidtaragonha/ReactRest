import * as React from 'react';
import {Table, TableBody, TableHeader} from 'material-ui/Table';
import {TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class SpecimenGrid extends React.Component<{}, {}> {
  constructor(props: Object) {
    super(props);
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
      {}
        <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>Steve Brown</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    );
  }
}

export default SpecimenGrid;
