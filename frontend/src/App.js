import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Add from './pages/Add';
// import UIDoc from './pages/UIDoc';

import pages from './pages';

export default class App extends React.Component {
  state = {
    path: window.location.pathname
  };

  handleNavClick = path => {
    this.setState({ path });
  };

  render() {
    return (
      <Container>
        <Router>
          <div className="App">
            <Navbar onNavClick={this.handleNavClick} path={this.state.path} />
            <Switch>
              <Route exact path="/" component={pages.Home} />
              <Route exact path="/add" component={pages.Add} />
              <Route exact path="/ui-doc" component={pages.UIDoc} />
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}
