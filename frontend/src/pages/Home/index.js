import React from 'react';
import axios from 'axios';

import Loader from '../../components/Loader';
import Table from '../../components/Table';

export default class Component extends React.Component {
  state = {
    dataLength: 0,
    items: []
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.getItems(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getItems = () => {
    axios
      .get('http://localhost:3000/test')
      .then(res => {
        this.setState({ dataLength: res.length });
        const items = res.data;
        this.setState({ items });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.dataLength) {
      return <Table items={this.state.items} />;
    }
    return <div className="center-text">No Data to Display</div>;
  }
}
