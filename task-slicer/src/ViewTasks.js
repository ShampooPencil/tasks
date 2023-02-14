export default function ViewTasks(props) {
  const { details } = props;

  // TODO: get cart from redux store

  return (
    <div className="task-info">
      <h3>{details.name}</h3>
      <p>{details.description}</p>
    </div>
  );
}
