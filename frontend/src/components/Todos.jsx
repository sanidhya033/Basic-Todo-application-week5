export function RenderAllTodo({ todos, onUpdate }) {
  const handleMarkCompleted = (todo) => {
    const updatedTodo = { ...todo, completed: true };

    // Simulate API update (replace this with an actual API call if needed)
    fetch(`http://localhost:3000/todo/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTodo),
    })
      .then((res) => res.json())
      .then(() => {
        onUpdate(updatedTodo);
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h1>{todo.description}</h1>
          <button
            onClick={() =>
              todo.completed
                ? null
                : handleMarkCompleted(todo)
            }
          >
            {todo.completed ? "Completed" : "Mark as Completed"}
          </button>
        </div>
      ))}
    </div>
  );
}
