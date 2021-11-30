import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleToggleItem(props.item);
    }
    return (
        <div onClick={handleClick} className={`items${props.completed ? ' completed' : ''}`}>
            <p>{props.task}</p>
        </div>
    )
}
export default Todo;