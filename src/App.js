import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>todo react</p>
        <input type="text"/>
        <button>guardar</button>

        <TodoList />
      </header>
    </div>
  );
}

export default App;
