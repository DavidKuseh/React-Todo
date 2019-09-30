// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from '../TodoComponents/Todo';
// import TodoForm from '../TodoComponents/TodoForm';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todo.map(tasks => (
                <Todo key={tasks.id} tasks={tasks} toggleTask={props.toggleTask} />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;


