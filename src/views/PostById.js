import React from "react";
import { connect } from "react-redux";
import { commentsFetch } from "../actions/comments/index";
import { postsFetch } from "../actions/posts/";

const mapStateToProps = (state, props) => ({
  post: state.posts.posts.find(post => post.id === props.match.params.id),
  comments: state.comments.comments[props.match.params.id] || []
});

class PostById extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.dispatch(postsFetch());
    this.props.dispatch(commentsFetch(id));
  }

  render() {
    const comments = this.props.comments.map(c => <p>{c.body} | {c.owner}</p>)
    return (
      <div>
        <img src={this.props.post.image} alt=""/>
        { comments }
      </div>
    );
  }
}

export default connect(mapStateToProps)(PostById)