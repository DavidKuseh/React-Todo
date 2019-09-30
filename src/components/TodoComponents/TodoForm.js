import React from 'react';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='todoForm'>
                <input type='text' name='add todo'></input>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        )
    }
}


