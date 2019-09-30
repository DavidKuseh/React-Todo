import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todo = [
  {
    task: 'Read on this keyword',
    id: 1,
    completed: false
  },
  {
    task: 'Complete MVP',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo
    };
  }
 
  addTask = (event, taskName) => {
    event.preventDefault();
    const initial =  this.state.todo.filter(
      tasks => tasks.task === taskName
    );
    if (initial.length === 0) {
      const newTask = {
        task: taskName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todo: [...this.state.todo, newTask]
      });
    }
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todo: this.state.todo.filter(tasks => !tasks.completed)
    });
  };

  toggleTask = taskId => {
    console.log('App.js: App: toggleTask: ', taskId);
    console.log('App.js: App: this.state: ', this.state);

    this.setState({
      todo: this.state.todo.map(tasks => {
        if (tasks.id === taskId) {
          return {...tasks, completed: !tasks.completed };
        }
        return tasks;
      })
    })
  }

  render() {
    console.log('rendering...');
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todo={this.state.todo}
          toggleTask={this.state.toggleTask}
          clearCompleted={this.clearCompleted}
        />
        <TodoForm addTask={this.addTask}/>
        {/* <Todo /> */}
      </div>
    );
  }
}

export default App;



