import React, { useState, createContext, useEffect, useContext } from "react";
import { userContext } from "./userContext";

export const todoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [user, userData, db] = useContext(userContext);

  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .collection("todos")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data() }))
        );
      });
  }, []);

  const addTodo = (todoText, completed) => {
    db.collection("users").doc(user.uid).collection("todos").add({
      task: todoText,
      completed: completed,
    });
  };

  const completedTodo = (todoId, completed) => {
    console.log(completed);
    db.collection("users")
      .doc(user.uid)
      .collection("todos")
      .doc(todoId)
      .update({
        completed: completed,
      });
  };

  const removeTodo = (todoId) => {
    db.collection("users")
      .doc(user.uid)
      .collection("todos")
      .doc(todoId)
      .delete();
  };

  return (
    <todoContext.Provider
      value={[todos, setTodos, addTodo, removeTodo, completedTodo]}
    >
      {props.children}
    </todoContext.Provider>
  );
};
