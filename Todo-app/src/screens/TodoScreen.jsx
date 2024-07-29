import { useContext, useState } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import { useNavigate } from "react-router-dom";
import TaskContext from "../context/TaskContext";

const TodoScreen = () => {
  const { taskList } = useContext(TaskContext);

  const navigate = useNavigate();

  // let addNewTask = (task) => {
  //   setTaskList([...tasklist, { ...task, createdDate: new Date() }]);
  // };

  return (
    <div className="screen">
      <h1 className="ui heading center">Todo List</h1>
      <button
        className="ui secondary button"
        onClick={() => {
          // setTaskList([
          //   ...tasklist,
          //   {
          //     Title: "Go to the Gym",
          //     description: "Going to the gym helps in building muscles",
          //     createdDate: new Date(),
          //   },
          // ]);
          navigate("/AddTask");
        }}
      >
        Add Task
      </button>

      {/* {tasklist.map((task) => console.log(task))} */}
      <div className="ui cards card-body">
        {/* {taskList && taskList.length > 0 ? (
          taskList.map((task, index) => <Task key={index} task={task} />)
        ) : (
          <p>No task Available</p>
        )} */}
        {taskList.map((task) => (
          <Task key={task.taskId} task={task} />
        ))}
      </div>

      {/* <AddTask onSubmit={addNewTask} /> */}
    </div>
  );
};
export default TodoScreen;
