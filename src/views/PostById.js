import React from "react";

export default class PostById extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
  }

  render() {
    return (
      <div />
    );
  }
}