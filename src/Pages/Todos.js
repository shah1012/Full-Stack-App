import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import "../css/Todos.css";

import Todo from "../components/Todo";
import { userContext } from "../contexts/userContext.js";
import { todoContext } from "../contexts/todoContext";

function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos, addTodo] = useContext(todoContext);
  const [user, userData] = useContext(userContext);

  const add = (e) => {
    e.preventDefault();
    addTodo(todo, false);
    setTodo("");
  };

  return (
    <div className="todos-div">
      <Navbar />
      <h3>Your Todos</h3>
      <div className="todo-inputs">
        <form onSubmit={add}>
          <input
            type="text"
            placeholder="Enter a new todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>Add</button>
        </form>
      </div>

      <div className="todos">
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo.todo} completed={todo.completed} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
