import React, { Component, Fragment } from 'react';
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store";

import Login from "./views/Login";
import Posts from "./views/Posts";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path="/" exact component={Login} />
            <Route path="/posts" exact component={Posts} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
