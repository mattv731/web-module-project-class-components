import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChanges = event => {
        this.setState({
            ...this.state,
            input: event.target.value
        });
    };
    handleClick = (event) => {
        event.preventDefault();

        this.props.handleAddItem(this.state.input);
    }

    render() {

        return (
            <form>
                <input onChange={this.handleChanges} type="text" name="item" />
                <button onClick={this.handleClick}>Submit</button>
            </form>
        )
    }
}

export default TodoForm;