import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./views/Login";
import Posts from "./views/Posts";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route path="/" component={Login} exact></Route>
            <Route path="/posts" component={Posts} exact></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
