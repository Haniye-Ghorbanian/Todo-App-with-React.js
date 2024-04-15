export default function PomodoroTimerOption() {
  return (
    <div className="flex justify-start items-center space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g id="style=linear">
          <g id="timer">
            <path
              id="vector"
              d="M21 13.25C21 18.218 16.968 22.25 12 22.25C7.032 22.25 3 18.218 3 13.25C3 8.282 7.032 4.25 12 4.25C16.968 4.25 21 8.282 21 13.25Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector"
              d="M12 8.25V13.25"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="line"
              d="M9 1.75L15 1.75"
              stroke="#fff"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>

      <span className="font-semibold text-xl text-slate-200 drop-shadow-sm">
        Pomodoro Timer
      </span>
    </div>
  );
}
