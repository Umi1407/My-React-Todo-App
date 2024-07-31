import React, { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const removeTodo = (text) => {
    const newTodo = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodo);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList remove={removeTodo} list={todos} />
    </div>
  );
}

export default App;
