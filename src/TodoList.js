import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  state = {
    tasks: ['ir de compras', 'hacer dieta', 'ir al gym', 'buscar la pizza']
  }

  render() {
    const { tasks } = this.state;

    return(
      <div>
        {
          tasks.map(
            task => {
              return <TodoItem task={task}/>
            }
          )
        }
      </div>
    )
  }
}