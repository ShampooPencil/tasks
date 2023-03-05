export default function ViewTasks(props) {
  const { details } = props;

  // TODO: get cart from redux store

  return (
    <div className="task-info">
      <label className="task-name">
        <input type="checkbox" />
        {details.name}
        <p className="task-description">{details.description}</p>
      </label>
    </div>
  );
}
