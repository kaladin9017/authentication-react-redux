import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Header extends Component {
  authButton() {
    return ( this.props.authenticated ? <button onClick={() => this.props.authenticate(false)} className="btn btn-danger" >Sign Out</button>
    : <button onClick={() => this.props.authenticate(true)} className="btn btn-danger" >Sign In</button> );

  }
  render() {
    return (
      <nav className="nav navbar-light">
        <ul className="nav navbar-nav">

          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/users">Users</Link></li>
          <li className="nav-item"><Link to="/resources">Resources</Link></li>
          <li className="nav-item"><Link to="/">
            {this.authButton()}</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  }
}
export default connect(mapStateToProps, actions)(Header);
