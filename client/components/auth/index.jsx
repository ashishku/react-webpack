import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Auth extends React.Component {
  render() {
    const { app } = this.props;

    return (
      <div className="app">
        Login
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
)(Auth));