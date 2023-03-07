import DarkTheme from "./DarkTheme.js";
import TaskSlicer from "./TaskSlicer.js";

export default function ViewTasks(props) {
  const { details, onDeleteClick, theme } = props;
  // TODO: get cart from redux store
  // function handleDeleteTask(id) {
  //   removeTask(details.filter((product) => product.id !== id));
  // }
  return (
    <div className={"task-info dark"}>
      <label className="task-name">
        <input type="checkbox" />
        {details.name}
        <p className="task-description">{details.description}</p>
        <button onClick={() => props.onDeleteClick(details.id)}>remove</button>
      </label>
    </div>
  );
}
