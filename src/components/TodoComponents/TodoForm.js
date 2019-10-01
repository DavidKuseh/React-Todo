import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state={ 
            taskName: '' 
        };
    }
    handleChanges = event => {
        this.setState({ taskName: event.target.value });
        console.log(this.state.taskName);
    };

    handleSubmit = event => {
        this.props.addTask(event, this.state.taskName);
        this.setState({ taskName: '' });
    }
 
    render() {
        console.log('rendering form');
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    name='tasks' 
                    value={this.state.taskName}
                    onChange={this.handleChanges} 
                    placeholder='Enter task'
                />
                <button>Submit Button</button>
            </form>  
        );
    }
}


