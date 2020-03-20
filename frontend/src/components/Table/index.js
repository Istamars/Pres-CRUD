import React from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

import TableRow from '../TableRow';

export default class Component extends React.Component {
  onDeleteBook = id => {
    axios
      .delete(`http://localhost:3001/test/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log('Failed insert');
      });
  };

  render() {
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Book Name</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
            <Table.HeaderCell>Act</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.items.map(item => (
            <TableRow onDelete={this.onDeleteBook} key={item.id} item={item} />
          ))}
        </Table.Body>
      </Table>
    );
  }
}
