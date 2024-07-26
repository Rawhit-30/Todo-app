import { useState } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";

const TodoScreen = () => {
  const [tasklist, setTaskList] = useState([]);

  let addNewTask = (task) => {
    setTaskList([...tasklist, { ...task, createdDate: new Date() }]);
  };

  return (
    <div className="screen">
      <h1 className="ui heading center">Todo List</h1>
      <button
        className="ui secondary button"
        onClick={() => {
          setTaskList([
            ...tasklist,
            {
              Title: "Go to the Gym",
              description: "Going to the gym helps in building muscles",
              createdDate: new Date(),
            },
          ]);
        }}
      >
        Add Task
      </button>

      <div className="ui cards card-body">
        {tasklist.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>

      <AddTask onSubmit={addNewTask} />
    </div>
  );
};
export default TodoScreen;
