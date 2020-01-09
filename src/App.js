import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import firebaseApp from './firebase';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
    this.tasksRef = firebaseApp.database().ref().child('tasks');
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    const input = this.state.input;

    const addTask = () => this.tasksRef.push( {
      body: input
    } ).key

    return (
      <div className="App">
        <header className="App-header">
          <p>ToDo React</p>
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button onClick={addTask}> guardar </button>
  
          <TodoList />
        </header>
      </div>
    );
  }
}
