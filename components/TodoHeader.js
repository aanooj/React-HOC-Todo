import React from "react";

const TodoHeader = props => {
  return (
    <div className="todo-heading">
      <h1 className="todo-header">Todo application</h1>
      <div> Total Items : {props.todos.length}</div>
    </div>
  );
};

export default TodoHeader;
