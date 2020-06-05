import React from "react";
import List from "../components/List";
import TodoHeader from "../components/TodoHeader";
import TodoBody from "../components/TodoBody";
import TodoFooter from "../components/TodoFooter";
import "./styles.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.handleInput = this.handleInput.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todo: "",
      todos: []
    };
    return this;
  }

  /**
   * handleInput coming from input box
   * @param {event} e
   */
  handleInput(e) {
    this.setState({
      todo: e.target.value || ""
    });
  }

  /**
   * Handle list item click
   * @param {String} name
   */
  handleTodoClick(name) {
    this.state.todos.map(todo => {
      if (name === todo.name) {
        todo.completed = !todo.completed;
      }
    });

    this.setState(this.state);
  }

  /**
   * Add new todo item into state
   * @param {String} newTodo
   */
  addTodo(newTodo) {
    // if new item is blank and do nothing
    if (!newTodo) return;

    const { todos } = this.state;

    // check if the item already exists in the list of todos
    const alreadyExists = todos.filter(todo => todo.name == newTodo).length;

    // increase the quantity or add new todo
    if (alreadyExists) {
      todos.map(todo => todo.name === newTodo && todo.qty++);
    } else {
      todos.push({
        name: newTodo,
        qty: 1,
        completed: false
      });
    }

    // update state and remove todo string to empty the input box
    this.setState({
      todos,
      todo: ""
    });
  }

  /**
   * Render the component
   */
  render() {
    const { todo } = this.state;
    return (
      <div className="todo">
        <TodoHeader todos={this.state.todos} />
        <TodoBody>
          <input
            className="todo-input"
            onChange={this.handleInput}
            type="text"
            placholder="enter item"
            value={todo}
          />
          <button
            className="todo-button"
            onClick={() => this.addTodo(this.state.todo)}
            type="button"
            name="add"
          >
            Add
          </button>
          <List onClick={this.handleTodoClick} items={this.state.todos} />
        </TodoBody>
        <TodoFooter />
      </div>
    );
  }
}

export default TodoApp;
