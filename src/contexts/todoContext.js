import React, { useState, createContext, useEffect, useContext } from "react";
import { userContext } from "./userContext";

export const todoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [user, userData, db] = useContext(userContext);

  useEffect(() => {
    userData().then((doc) => {
      const docData = doc.data();
      const docTodos = docData.todos;
      setTodos(docTodos);
    });
  }, []);

  const addTodo = (todoText, completed) => {
    db.collection("users")
      .doc(user.uid)
      .update({
        todos: [...todos, { todo: todoText, completed: completed }],
      });
    setTodos((prevTodos) => [
      ...prevTodos,
      { todo: todoText, completed: completed },
    ]);
  };

  const removeTodo = todoText;

  return (
    <todoContext.Provider value={[todos, setTodos, addTodo]}>
      {props.children}
    </todoContext.Provider>
  );
};
