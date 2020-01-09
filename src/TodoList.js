import React, { Component } from 'react';
import TodoItem from './TodoItem';
import firebaseApp from './firebase';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
    this.tasksRef = firebaseApp.database().ref().child('tasks');
    console.log("Contructor:::", this.tasksRef)
  }

  componentDidMount() {
    this.listenForTasks(this.tasksRef);
  }

  listenForTasks(tasksRef) {
    
    tasksRef.on('value', snap => {
      let tasks = [];

      snap.forEach((child) => {
        tasks.push(
          child.val().body,
        );
      });
      
      this.setState({
        tasks: tasks
      });
    });
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