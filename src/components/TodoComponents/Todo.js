import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.todo}</p>
            </div>
        )
    }
}


