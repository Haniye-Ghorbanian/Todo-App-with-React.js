import { ModalContext } from "./store/modalContext";
import { useContext } from "react";
import { CrudContext } from "./store/crudContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import TodoListWrapper from "./components/todoListWrapper";
import HabitTrackerPage from "./components/habit tracker page/habitTrackerPage";
import PomdoroTimerPage from "./components/pomodoro page/pomodroTimerPage";
import ProfilePage from "./components/profile page/profilePage";
import Menu from "./components/head toolbar/menu/menu";
import ModalCtx from "./store/modalContext";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/todo", element: <TodoListWrapper /> },
      { path: "/habit-tracker", element: <HabitTrackerPage /> },
      { path: "/pomodoro-timer", element: <PomdoroTimerPage />},
      { path: "/profile", element: <ProfilePage />}
    ],
  },
]);

function App() {

  
  return (
    <ModalContext>
      <CrudContext>
      
        <RouterProvider router={routes}/>
      </CrudContext>
    </ModalContext>
  );
}

export default App;
