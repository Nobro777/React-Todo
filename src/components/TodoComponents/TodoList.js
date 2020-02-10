import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log("props test", props)
return (
    <div className="container">
    {props.list.map(item => (
        <Todo 
        key={item.id} 
        task={item.task} 
        id={item.id} completed={item.completed}
        toggleItem={props.toggleItem}
        />
    ))}
    <button className="clear-btn" onClick={()=>{props.deleteItem()}}>
        Clear Selected Items
    </button>
    </div>
);
};

export default TodoList;