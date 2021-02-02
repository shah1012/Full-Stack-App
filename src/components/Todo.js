import React, { useEffect, useState } from "react";
import "../css/todo.css";
import * as FaIcons from "react-icons/fa";

function Todo({ todo, completed }) {
  return (
    <div className="todoDiv">
      <li className="todo-item">{todo}</li>
      <button className="complete-btn">
        <FaIcons.FaCheck />
      </button>
      <button className="trash-btn">
        <FaIcons.FaTrash />
      </button>
    </div>
  );
}

export default Todo;
