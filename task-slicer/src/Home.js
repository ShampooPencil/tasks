import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
        <h1>Task-Slicer</h1>
        <p>
          Order your groceries from <em>SuperM</em> with our easy to use app,
          and get your products delivered straight to your doorstep.
        </p>
        <Link to="/taskslicer" className="btn btn-default">
          add new tasks
        </Link>
      
    </div>
  );
}
