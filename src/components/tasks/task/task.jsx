export default function Task({ task }) {
  return (
    <div className="w-full h-20 flex items-center justify-start space-x-3 mb-5 px-4 rounded-lg bg-white shadow-sm">
      <div className="peer absolute z-10 w-5 h-5">
        <input
          type="checkbox"
          className="absolute appearance-none rounded-full border-2 border-solid  border-blue-600 w-5 h-5 "
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
        htmlFor="task"
        className="absolute left-16 peer-has-[:checked]:line-through peer-has-[:checked]:text-gray-400"
      >
        {task.title}
      </label>
    </div>
  );
}
