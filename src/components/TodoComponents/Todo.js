import React from 'react';

const Todo = props => {
    console.log("my props", props)
return (
    <div
        onClick={() => props.toggleItem(props.id)}
        className={`${props.completed ? 'completed' : ''}`}
    >
    <p>{props.task}</p>
    
    </div>
);
};

export default Todo;
