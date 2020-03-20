import React from 'react';
import { Button } from 'semantic-ui-react';
import { Table } from 'semantic-ui-react';

import Modal from '../Modal';

export default class Component extends React.Component {
  deleteItem = id => {
    this.props.onDelete(id);
  };

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.item.id}</Table.Cell>
        <Table.Cell>{this.props.item.title}</Table.Cell>
        <Table.Cell>{this.props.item.author}</Table.Cell>
        <Table.Cell>
          <Button
            color="red"
            onClick={() => this.deleteItem(this.props.item.id)}
            compact
            attached="left"
          >
            Delete
          </Button>
          <Modal prop={this.props.item} />
        </Table.Cell>
      </Table.Row>
    );
  }
}
