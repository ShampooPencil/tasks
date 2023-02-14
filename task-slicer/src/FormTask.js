import { useState } from "react";

export default function FormTask() {
  const [task, setTask] = useState([]);
  const [description, setDescription] = useState([]);

  const handleSubmit = (event) => {
    console.log("Task was submitted!");
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task" />
        <input type="text" placeholder="Enter password" />
        <button type="submit">+</button>
      </form>
    </div>
  );
}
