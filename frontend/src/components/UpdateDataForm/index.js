import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Component extends React.Component {
  state = {
    author: '',
    title: ''
  };

  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  updateItem = id => {
    const data = { author: this.state.author, title: this.state.title };
    axios
      .patch('http://localhost:3001/test/' + id, data)
      .then(response => response.json())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.updateItem}>
        <Form.Field>
          <label>Book Name</label>
          <input
            placeholder="Book Title"
            type="text"
            name="author"
            id="author"
            onChange={event => this.setState({ title: event.target.value })}
            defaultValue={this.state.title}
          />
        </Form.Field>
        {/* <Form.Field>
          <label>Author</label>
          <input
            placeholder="Author"
            type="text"
            name="title"
            id="title"
            onChange={event => this.setState({ author: event.target.value })}
            defaultValue={this.state.author}
          />
        </Form.Field>
        <Button type="submit">Cancel</Button> */}
      </Form>
    );
  }
}
