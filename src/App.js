import React, { Component } from 'react';
import TodoItem from './TodoItem'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoList: [{todoText: 'todo1', status: false}, {todoText: 'todo2', status: false}],
    }
  }
  //Each todo will look like {todoText: 'some text', status: true}

  changeTodoStatus = (index) => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.todoList[index].status = true
    this.setState(newState)
  }

  
  render() {
    
    return (
      <div className="App">
        <ul>
          {this.state.todoList.map((element, index) => <TodoItem todoText={element.todoText} status={element.status} changeTodoStatus={() => {this.changeTodoStatus(index)}}/>)}
        </ul>
      </div>
    );
  }
}

export default App;
