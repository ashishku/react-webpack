import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './app.scss';

class App extends React.Component {
  render() {
    const { app } = this.props;

    return (
      <div className="app">
        Hello
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));