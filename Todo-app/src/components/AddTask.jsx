import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskContext from "../context/TaskContext";

const AddTask = () => {
  const { addNewTask } = useContext(TaskContext);

  const navigate = useNavigate();

  const [task, setTask] = useState({
    Title: "",
    description: "",
  });

  const handlechange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  let Handlesubmit = (e) => {
    e.preventDefault();
    console.log(task);
    addNewTask(task);
    setTask({});
    navigate("/");
  };

  return (
    <section className="screen">
      <h3 className="ui heading center">Add New Task</h3>
      <div className="ui form">
        <form onSubmit={Handlesubmit}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter the title "
              name="Title"
              onChange={handlechange}
              value={task.Title}
            />
            <label>Description</label>
            <textarea
              rows="2"
              placeholder="Enter Description"
              name="description"
              onChange={handlechange}
              value={task.description}
            ></textarea>
          </div>
          <button type="submit" className="ui primary button">
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
