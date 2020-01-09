import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { task } = this.props;
    //console.log("PROP::::", this.props)

    return(
      <p> { task.body } </p>
    )
  }
}