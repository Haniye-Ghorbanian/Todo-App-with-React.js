import HamburgerBars from "./taskIcons/hamburgerBar";
import TaskOptions from "./taskIcons/taskOptions.jsx/taskOptions";

export default function Task({ task, id, onDelete }) {

  // console.log(id)

 

  return (
    <div className="w-full flex items-center justify-between bg-white shadow-sm rounded-lg h-16 overflow-hidden mb-5">
      <div className="w-full flex items-center justify-start space-x-3 px-4">
        <div className="peer absolute z-10 w-5 h-5">
          <input
            id={id}
            type="checkbox"
            className="absolute appearance-none rounded-full border-2 border-solid border-blue-600 w-5 h-5 "
          />
        </div>

        <svg
          className="w-6 h-6 text-blue-600 dark:text-white left-7  invisible peer-has-[:indeterminate]:visible absolute peer-has-[:checked]:visible"
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
          className="absolute left-16 peer-has-[:checked]:line-through peer-has-[:checked]:text-gray-400"
        >
          {task.title}
        </label>
      </div>

      <div className="flex flex-row-reverse items-center">
        <HamburgerBars />
        <TaskOptions id={id} onDelete={onDelete}/>
      </div>
    </div>
  );
}
