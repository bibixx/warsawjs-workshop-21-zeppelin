import React from "react";
import { connect } from "react-redux";
import { postsFetch } from "../actions/posts/";

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(postsFetch());
  }

  render() {
    return (
      <h1>Posts</h1>
    );
  }
}

export default connect()(Posts);