import React from "react";
import { login } from "../actions/user";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = ({ user }) => ({
  fetching: user.fetching,
  username: user.username
});

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    usernameError: false,
    passwordError: false,
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    let error = false;

    if (!username) {
      this.setState({
        usernameError: true,
      });
      
      error = true;
    } else {
      this.setState({
        usernameError: false,
      });
    }
    
    if (!password) {
      this.setState({
        passwordError: true,
      });

      error = true;
    } else {
      this.setState({
        passwordError: false,
      });
    }

    if (error) {
      return;
    }

    this.props.dispatch(login({username, password}));
  }

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    if (this.props.username) {
      return (
        <Redirect to="/posts/" />
      );
    }

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>

          <h2>Username</h2>
          <input type="text" onChange={this.onUsernameChange} />
          <p>{ this.state.usernameError ? "You must specify username" : "" }</p>

          <h2>Password</h2>
          <input type="password" onChange={this.onPasswordChange} />
          <p>{ this.state.passwordError ? "You must specify password" : "" }</p>

          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);