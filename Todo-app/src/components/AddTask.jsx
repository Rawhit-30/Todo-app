import { useState } from "react";

const AddTask = ({ onSubmit }) => {
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
    onSubmit(task);
  };

  return (
    <>
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
    </>
  );
};

export default AddTask;
