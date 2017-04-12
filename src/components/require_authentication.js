import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    /*
      define contextTypes and give component access
      to router propertie that is of type object
    */
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentDidMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }

    /*
      componentWillUpdate will handle the case of the user hitting signout
      because will mount only occurs on initial mount
    */
    componentWillUpdate(nextProps) {
      console.log(nextProps.authenticated)
      if (!nextProps.authenticated) {
        this.context.router.push('/')
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
  }

  return connect(mapStateToProps)(Authentication);
}
