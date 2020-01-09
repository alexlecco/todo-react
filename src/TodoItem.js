import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return(
      <p>{this.props.task}</p>
    )
  }
}