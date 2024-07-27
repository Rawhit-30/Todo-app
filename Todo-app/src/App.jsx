import AddTask from "./components/AddTask";
import TodoScreen from "./screens/TodoScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoScreen />,
    },
    {
      path: "/AddTask",
      element: <AddTask />,
    },
  ]);

  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
};
export default App;
