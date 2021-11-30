// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo'

const TodoList = props => {
    console.log(props.handleToggleItem)
    return (
        <div>
            {props.todo.map(item => (
                <Todo handleToggleItem={props.handleToggleItem} key={item.id} item={item} />
            ))}
        </div>
    )
}
export default TodoList