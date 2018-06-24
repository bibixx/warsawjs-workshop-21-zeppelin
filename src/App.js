import React, { Component } from "react";
import { Provider } from "react-redux";
import Login from "./views/Login";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Login></Login>
        </div>
      </Provider>
    );
  }
}

export default App;
