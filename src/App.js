import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

    constructor() {
    super();
    this.state = {
        
        todoList: [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ]
    };
}

deleteItem = () => {
  console.log("to do list", this.state.todoList)
  const deleteThis = this.state.todoList.filter(item => {
    if (!item.completed){
      return {
        item
      }
    } 
  })
  this.setState({
    todoList: deleteThis
  })
}

toggleItem = clickedId => {
  const newTodoList = this.state.todoList.map(item => {
    if (item.id === clickedId) {
      return {
        ...item,
        completed: !item.completed
      };
    } else {
      return item;
    }
  });
  this.setState({
    todoList: newTodoList
  });
};


addNewItem = todoItem => {
  const newItem = {
    task: todoItem,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todoList: [...this.state.todoList, newItem]
  });
};
  
  render() {
    return (
      <div className= "container">
        <TodoForm 
        addNewItem={this.addNewItem} 
        />
        <TodoList 
        list={this.state.todoList}
        toggleItem={this.toggleItem}
        deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
