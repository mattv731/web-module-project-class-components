import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleToggleItem(props.completed);
    }
    return (
        <div onClick={handleClick} className={`items${props.completed ? ' completed' : ''}`}>
            <p>{props.item}</p>
        </div>
    )
}
export default Todo;