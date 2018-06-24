import React from "react";
import { startLogin } from "../actions/user/";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    
    const { username, password } = this.state;
    
    this.props.dispatch(startLogin(username, password));
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        <input  
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.onChangeUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.onChangePassword} 
        />

        <button>Submit</button>
      </form>
    )
  }
}

export default connect()(Login);