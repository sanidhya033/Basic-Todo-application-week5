import { useState } from "react";

export function CreateTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    // Basic validation
    if (!title || !description) {
      alert("Please provide both title and description.");
      return;
    }

    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Todo Added Successfully!");
        // Call the onAddTodo callback to update the todos list
        onAddTodo(data.todo); // Assuming the API returns the created todo object
        // Clear input fields
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        alert("Failed to add todo. Please try again.");
      });
  };

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Enter title"
        value={title} // Bind value to state
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Enter description of your task"
        value={description} // Bind value to state
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        style={{
          margin: 10,
        }}
        onClick={handleAddTodo}
      >
        Add a Todo!!
      </button>
    </div>
  );
}
