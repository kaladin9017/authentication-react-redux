import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';


import App from './components/app';
import Resources from './components/resources';
import Authentication from './components/require_authentication';
import UserList from './components/user_list';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={Authentication(Resources)} />
        <Route path="users" component={Authentication(UserList)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
