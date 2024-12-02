import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/Createtodo";
import { RenderAllTodo } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  // Function to handle completed todos
  const handleTodoUpdate = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  };

  // Function to handle adding a new todo
  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <CreateTodo onAddTodo={handleAddTodo} />
      <RenderAllTodo todos={todos} onUpdate={handleTodoUpdate} />
    </div>
  );
}

export default App;
