import React from 'react';

export default class Component extends React.Component {
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        See <a href="https://react.semantic-ui.com/">React Semantic UI</a> docs
        for more component and ui implementation.
      </div>
    );
  }
}
