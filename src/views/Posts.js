import React from "react";
import { connect } from "react-redux";

import isLoggedIn from "../components/isLoggedIn";
import { fetchPosts } from "../actions/posts/index";
import { API_URL } from "../constants";

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts,
  fetching: posts.fetching,
});


class Posts extends React.Component {
  timer = null;

  componentDidMount() {
    this.fetchPosts();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }
  
  fetchPosts = () => {
    this.props.dispatch(fetchPosts());

    this.timer = setTimeout(this.fetchPosts, 2000);
  }

  render() {
    const posts = this.props.posts.map( post => (
      <p key={`post-${post.id}`}><a href={`${API_URL}/posts/${post.id}`}>{JSON.stringify(post)}</a></p>
    ) );
    
    const shouldDisplayLoading = this.props.posts.length <= 0 && this.props.fetching;

    return (
      <React.Fragment>
        <h1>Hi mate!</h1>
        {posts}
        {shouldDisplayLoading ? "Loading..." : ""}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(isLoggedIn(Posts));