import React, { Component } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import axios from 'axios';

import './index.css';

class ModalExampleDimmer extends Component {
  variable = {};
  state = {
    open: false,
    author: this.props.prop.author,
    title: this.props.prop.title
  };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  onChange = e => {
    this.variable[e.target.name] = e.target.value;
    console.log(this.variable);
    // this.setState({ [e.target.name]: e.target.value });
  };

  updateItem = () => {
    // const data = { author: this.state.author, title: this.state.title };
    axios
      .patch(`http://localhost:3001/test/${this.props.prop.id}`, this.variable)
      .then(res => {
        console.log(res.status);
        this.close();
      })
      .catch(err => console.log(err));
  };

  render() {
    const { open, dimmer } = this.state;

    return (
      <React.Fragment>
        <Button
          compact
          attached="right"
          color="teal"
          onClick={this.show('blurring')}
        >
          Update
        </Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Update {this.props.prop.title}</Modal.Header>
          <Modal.Content image>
            <Form onSubmit={this.updateItem}>
              <Form.Field>
                <label>Name</label>
                <input
                  placeholder="Book's Author Name"
                  type="text"
                  name="author"
                  id="author"
                  onChange={this.onChange}
                  defaultValue={this.props.prop.author}
                />
              </Form.Field>
              <Form.Field>
                <label>Title</label>
                <input
                  placeholder="Book Title"
                  type="text"
                  name="title"
                  id="title"
                  onChange={this.onChange}
                  defaultValue={this.props.prop.title}
                />
              </Form.Field>
              <Button color="teal" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              inverted
              icon="close"
              color="red"
              labelPosition="right"
              content="Cancel"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalExampleDimmer;
