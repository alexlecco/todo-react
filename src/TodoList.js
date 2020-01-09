import React, { Component } from 'react';
import TodoItem from './TodoItem';
import firebaseApp from './firebase';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = { tasks: [] }
    this.tasksRef = firebaseApp.database().ref().child('tasks');
  }

  componentWillMount() {
    this.listenForTasks(this.tasksRef);
  }

  listenForTasks(tasksRef) {
    tasksRef.on('value', snap => {
      let tasks = [];
      
      snap.forEach((child) => {
        tasks.push({
          body: child.val().body,
          id: child.key
        });
      });
      
      this.setState({
        tasks: tasks
      });
    });
  }

  render() {
    const { tasks } = this.state;
    // console.log("STATE::::", this.state)

    return(
      <div>
        {
          tasks.map(
            task => {
              return <TodoItem task={task} key={task.id} />
            }
          )
        }
      </div>
    )
  }
}