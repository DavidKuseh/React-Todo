import React from 'react';

const Todo = props => {
    return (
        <div  
            className={`tasks${props.tasks.completed ? " completed" : ""}`}
            onClick={() => {
                props.toggleTask(props.tasks.id);
            }}
        >
            <p>{props.tasks.task}</p>
        </div>         
    );
};

export default Todo;
