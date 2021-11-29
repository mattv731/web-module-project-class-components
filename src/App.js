import React  from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';

const todos = [
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
      todo: todos
    }
  
  
  handleToggle = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item => {
        return (!item.completed);
      })
    });
  }

  handleAddItem = (item) => {
    const newItem = {
      task: item,
      id: Date.now,
      completed: false 
    };

    this.setState({
      ...this.state,
      todo: [...this.state.todo, newItem]
    });
  }

  handleToggleItem = (item) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map(g => {
        if (g.id === item.id) {
          return {...g, completed: !g.completed}
        } else {
          return g
        }
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input placeholder="input"/>
        <TodoForm handleAddItem={this.handleAddItem} /> 
        <button onClick={this.handleToggle}>Clear All</button>
      </div>
    )
  }
}

export default App;
