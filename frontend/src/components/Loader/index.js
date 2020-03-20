import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export default class Component extends React.Component {
  render() {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      </Segment>
    );
  }
}
