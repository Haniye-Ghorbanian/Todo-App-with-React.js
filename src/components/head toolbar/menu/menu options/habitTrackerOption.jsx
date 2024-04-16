export default function HabitTrackerOption() {
  return (
    <div className="flex justify-start items-center space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19px"
        height="19px"
        viewBox="0 0 24 24"
        aria-labelledby="checkboxIconTitle"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        color="#fff"
      >
        {" "}
        <rect
          x="21"
          y="3"
          width="18"
          height="18"
          rx="1"
          transform="rotate(90 21 3)"
        />{" "}
        <path d="M6.66666 12.6667L9.99999 16L17.3333 8.66669" />{" "}
      </svg>

      <span className="font-semibold text-lg text-slate-200 drop-shadow-sm">
        Habit Tracker
      </span>
    </div>
  );
}
