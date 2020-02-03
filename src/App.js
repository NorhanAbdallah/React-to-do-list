import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    newTask: "",
    todos: [
      {text: 'react' , id: 0},
      {text: 'angular' , id: 1}
    ]
  }

  completeTask = (idm) => {
    const todos = [...this.state.todos];
    todos.splice(idm,1 );
    this.setState ({
      todos
    }); 
  }

  addTask =() => {
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask
    });
    this.setState ({
      todos
    }); 

  }

  updateNewTask = (event) => {
    this.setState ({
      newTask: event.target.value
    }); 
  }

render (){
 


  return (
    <div className="App">
  {this.state.todos.map((todo, index) => <li key={index}>{todo.text} 
  <button onClick= {() => this.completeTask(index)} >Done</button> </li>)}


  <input value={this.state.newTask} onChange={this.updateNewTask}/>
  <button onClick={this.addTask}>Add Task</button>
  </div>
  );
}
}

export default App;
