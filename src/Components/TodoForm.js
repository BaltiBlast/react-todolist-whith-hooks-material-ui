// -- NPM IMPORT
import React from "react";

// -- STYLE IMPORT
import TextField from "@material-ui/core/TextField";

// -- METHOD IMPORT
import useInputState from "../Utils/useInputState";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState("");

  const submitTodo = (event) => {
    event.preventDefault();
    saveTodo(value);
    reset();
  };

  return (
    <form onSubmit={submitTodo}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
