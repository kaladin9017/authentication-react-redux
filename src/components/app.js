import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from './header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
   return {
     posts: state.posts
   }
}

export default connect(mapStateToProps)(App);
