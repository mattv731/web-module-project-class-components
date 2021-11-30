import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleToggleItem(props.complete);
        console.log(props.task)
    }
    return (
        <div onClick={handleClick} className={`items${props.complete.completed ? ' completed' : ''}`}>
            <p>{props.task}</p>
        </div>
    )
}
export default Todo;