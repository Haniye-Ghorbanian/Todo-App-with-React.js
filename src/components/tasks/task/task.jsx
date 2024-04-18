import { useContext } from "react";
import HamburgerBars from "./taskIcons/hamburgerBar";
import TaskOptions from "./taskIcons/taskOptions.jsx/taskOptions";
import crudCtx from "../../../store/crudContext";

export default function Task({ task, id, onTask }) {
  const ctx = useContext(crudCtx);

  const handleTaskbox = async (e) => {
    const newIsDone = e.target.checked;
    ctx.handleTasks({ type: "HANDLE_DONE", payload: newIsDone });
    try {
      await fetch(`http://127.0.0.1:8000/api/todos/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...task,
          is_done: newIsDone,
        }),
      });

      ctx.fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex h-16 items-center justify-between bg-white shadow-sm rounded-lg overflow-hidden mb-5 pr-5">
      <div className="h-16 flex items-center justify-start space-x-3 px-4 w-3/5">
        <div className="flex items-center justify-between space-x-3 relative">
          <div className="peer absolute z-10 w-5 h-5">
            <input
              id={id}
              type="checkbox"
              className="absolute appearance-none rounded-full border-2 border-solid border-blue-600 w-5 h-5"
              onChange={handleTaskbox}
              checked={task.is_done}
            />
          </div>

          <svg
            className="w-6 h-6 text-blue-600 dark:text-white -left-3 invisible absolute peer-has-[:checked]:visible"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m5 12 4.7 4.5 9.3-9"
            />
          </svg>

          <label
            htmlFor={id}
            className="absolute left-5 peer-has-[:checked]:line-through peer-has-[:checked]:text-gray-400"
          >
            {task.title}
          </label>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center h-16">
        <HamburgerBars id={id} />
        <TaskOptions id={id} task={task} onTask={onTask} />
      </div>
    </div>
  );
}
