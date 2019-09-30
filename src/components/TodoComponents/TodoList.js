// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from '../TodoComponents/Todo';
import TodoForm from '../TodoComponents/TodoForm';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [{task:'', id: Date.now(), completed: false}]
        }
    }
    addTodo(){
        return(
            this.setState(currentState =>({
               todo: currentState.todo.map(item => { 
                   return { task: item.task, id: item.id, completed: false}
            })
          }))
        )
    }


    render() {
        const todo = this.state;
        return (
            <div>
               <Todo todo={todo}/> 
               <TodoForm />
            </div>
            
        )
    }
}


