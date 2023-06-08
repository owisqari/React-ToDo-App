import React from "react";
import { useState } from "react";
const ToDo = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const handleAdd = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <>
      <h1>ToDo</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
