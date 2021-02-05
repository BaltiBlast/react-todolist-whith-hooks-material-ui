import React from "react";
import TodoForm from "../src/Components/TodoForm";
import TodoList from "../src/Components/TodoList";
import useTodoState from "../src/Utils/useTodoState";
import Typography from "@material-ui/core/Typography";

import "../src/Style/styles.css";

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  const saveTodo = (todoText) => {
    const trimmedText = todoText.trim();
    if (trimmedText.length > 0) {
      addTodo(trimmedText);
    }
  };

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodo={saveTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
