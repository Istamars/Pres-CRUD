import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
import axios from 'axios';

export default class Component extends React.Component {
  state = {
    author: '',
    title: '',
    visible: false
  };

  handleDismiss = () => {
    this.setState({ visible: false });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const data = { author: this.state.author, title: this.state.title };
    axios.post('http://localhost:3001/test/', data).then(res => {
      console.log(res.status);

      this.setState({ author: '' });
      this.setState({ title: '' });
      this.setState({ visible: true });
    });
  };

  handleSuccessResponse = () => {
    console.log('oke');

    if (this.state.visible === true) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          content="Add Book Success!"
          color="green"
        />
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.handleFormSubmit}>
                <Form.Field>
                  <label>Title</label>
                  <input
                    name="title"
                    placeholder="Book title"
                    onChange={event =>
                      this.setState({ title: event.target.value })
                    }
                    value={this.state.title}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Author</label>
                  <input
                    name="author"
                    placeholder="Book's Author Name"
                    onChange={event =>
                      this.setState({ author: event.target.value })
                    }
                    value={this.state.author}
                  />
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {this.handleSuccessResponse()}
      </React.Fragment>
    );
  }
}
