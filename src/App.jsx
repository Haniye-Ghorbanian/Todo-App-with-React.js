import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ModalContext } from "./store/modalContext";
import { CrudContext } from "./store/crudContext";
import { TimerContext } from "./store/timerContext";
import Layout from "./components/layout/layout";
import TodoListWrapper from "./components/todoListWrapper";
import HabitTrackerPage from "./components/habit tracker page/habitTrackerPage";
import PomdoroTimerPage from "./components/pomodoro page/pomodroTimerPage";
import ProfilePage from "./components/profile page/profilePage";
import HomePage from "./components/home page/homePage";
import HomePageLayout from "./components/layout/homePageLayout";
import SignUpPage from "./components/form page/sign up page/signUpPage";
import SignInPage from "./components/form page/sign in page/signInPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "sign-in", element: <SignInPage /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/todo", element: <TodoListWrapper /> },
      { path: "/habit-tracker", element: <HabitTrackerPage /> },
      { path: "/pomodoro-timer", element: <PomdoroTimerPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);

function App() {
  return (
    <ModalContext>
      <CrudContext>
        <TimerContext>
          <RouterProvider router={routes} />
        </TimerContext>
      </CrudContext>
    </ModalContext>
  );
}

export default App;
