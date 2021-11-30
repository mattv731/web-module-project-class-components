import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }

  handleToggle = () => {
    this.setState({
      todo: this.state.todo.filter((item) => {
        return !item.completed;
      })
    });
  };

  handleAddItem = (item) => {
    const newItem = {
      task: item,
      id: Date.now,
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  handleToggleItem = (item) => {
    this.setState({
      todo: this.state.todo.map((g) => {
        if (g.id === item.id) {
          return { ...g, completed: !g.completed };
        } else {
          return g;
        }
      })
    });
  };
  render() {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem} />
        <TodoList handleToggleItem={this.handleToggleItem} todo={this.state.todo} />
        <button onClick={() => this.handleToggle}>Clear All</button>
      </div>
    );
  }
}

export default App;