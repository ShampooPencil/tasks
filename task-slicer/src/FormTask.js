import { useState } from "react";

export default function FormTask() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (event) => {
    console.log("Task was submitted!");
  };
  function handleNameChange(e) {
    setTaskName(e.target.value);
    console.log(taskName);
    // setValidation(0)
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
    console.log(description);
  }
  function handleTaskSubmit() {
    setTasks((current) => [
      ...current,
      ...[{ id: tasks.length, name: taskName, description: description }],
    ]);
    setTaskName([]);
    setDescription([]);
    //   setValidation(validate + 1)
  }
  function handleFormSubmit(e) {
    if (tasks[taskName] === "" || tasks[description] === "") {
      return e.preventDefault();
    } else {
      return handleTaskSubmit();
    }
  }
  return (
    <div className="card">
      <form onSubmit={handleFormSubmit}>
        <input
          id="taskName"
          type="text"
          placeholder="Task"
          onChange={handleNameChange}
        />
        <input id="description" type="text" placeholder="Enter Description" />
        <button type="submit">+</button>
      </form>
    </div>
  );
}
