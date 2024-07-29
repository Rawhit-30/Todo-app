import { useContext, useState } from "react";
import { formatDate } from "../utlis/dateFormatter";
import TaskContext from "../context/TaskContext";
const Task = ({ task: incomingTask }) => {
  const { Title, description, createdDate, taskId } = incomingTask;
  const { deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setisEditing] = useState(false);
  const [task, setTask] = useState(incomingTask);

  const handlechange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  if (isEditing) {
    return (
      <div className="card ">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <input
                type="text"
                placeholder="Enter the title "
                name="Title"
                onChange={handlechange}
                value={task.Title}
              />
              <div className="meta">{formatDate(createdDate)}</div>
            </div>
            <textarea
              rows="2"
              placeholder="Enter Description"
              name="description"
              onChange={handlechange}
              value={task.description}
            ></textarea>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div
                className="ui basic green button"
                onClick={() => {
                  editTask(task);
                  setisEditing(false);
                }}
              >
                save
              </div>
              <div
                className="ui basic red button"
                onClick={() => {
                  setisEditing(false);
                }}
              >
                cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="card ">
          <div className="content">
            <div className="header">{Title}</div>
            <div className="meta">{formatDate(createdDate)}</div>
            <div className="description">{description}</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div
                className="ui basic green button"
                onClick={() => setisEditing(true)}
              >
                edit
              </div>
              <div
                className="ui basic red button"
                onClick={() => {
                  deleteTask(taskId);
                }}
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Task;
