import React from "react";
import isLoggedIn from "../components/isLoggedIn";
import { postCreate } from "../actions/posts/";


class Component extends React.Component {
  state = {
    file: null,
    text: ""
  }

  onChangeFile = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  }

  onChangeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.text, this.state.file);

    const formData = new FormData();

    formData.append("title", this.state.text);
    formData.append("image", this.state.file);

    this.props.dispatch(postCreate(formData));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>File</h2>
        <input type="file" onChange={this.onChangeFile} />

        <h2>Text</h2>
        <input type="text" onChange={this.onChangeText} value={this.state.text} />

        <button type="submit">Submit!</button>
      </form>
    );
  }
}

export default isLoggedIn(Component);