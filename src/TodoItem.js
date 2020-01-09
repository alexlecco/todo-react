import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { task } = this.props;

    return(
      <p> {task} </p>
    )
  }
}