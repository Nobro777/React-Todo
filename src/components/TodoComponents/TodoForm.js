import React, { Component } from 'react';

class TodoForm extends Component {

    constructor(){
        super();
        this.state = {
            newItem: ""
        };
    };

    handleChanges = elem => {
    this.setState({
        newItem: elem.target.value
    });
    };

    handleSubmit = elem => {
        elem.preventDefault();
        this.props.addNewItem(this.state.newItem);
        this.setState({
            newItem: ""
        });
    };

    render() {
        console.log("change handler :",this.handleChanges)
        return (
            <div ClassName="container">
                <div>Add to the To-Do List!</div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="newItem"
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                    />
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
};

export default TodoForm;
