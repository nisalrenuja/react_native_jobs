import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";

const ListItem = ({ task }) => {
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <h3 className="task-title">{task.title}</h3>
        <ProgressBar />
      </div>
      <div className="button-container">
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </li>
  );
};

export default ListItem;
