import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Feature extends Component {
  componentWillMount() {
    this.props.getSecret();
  }
  render() {
    return (
      <div>Featured resource</div>
    )
  }
}

export default connect(null, actions)(Feature);
