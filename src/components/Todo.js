import React, { useEffect, useState, useContext } from "react";
import "../css/todo.css";
import * as FaIcons from "react-icons/fa";
import { todoContext } from "../contexts/todoContext";
import { userContext } from "../contexts/userContext";

function Todo({ todo, id }) {
  const [, , , removeTodo, completedTodo] = useContext(todoContext);
  const [user, , db] = useContext(userContext);

  const [completed, setCompleted] = useState(null);

  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .collection("todos")
      .doc(id)
      .get()
      .then((doc) => {
        setCompleted(doc.data().completed);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    removeTodo(id);
  };

  const handleCompleted = () => {
    completedTodo(id, !completed);
    setCompleted(!completed);
  };

  return (
    <div className="todoDiv">
      <li className={completed ? "todo-item-completed" : "todo-item"}>
        {todo}
      </li>
      <button className="complete-btn" onClick={handleCompleted}>
        <FaIcons.FaCheck />
      </button>
      <button className="trash-btn" onClick={handleClick}>
        <FaIcons.FaTrash />
      </button>
    </div>
  );
}

export default Todo;
