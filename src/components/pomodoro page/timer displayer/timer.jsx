import { useContext, useState, useEffect } from "react";
import timerContext from "../../../store/timerContext";

export default function Timer() {
  const timerCtx = useContext(timerContext);
  const [focusMinutes, setFocusMinutes] = useState(timerCtx.focusTime);
  const [shortBreakMinutes, setShortBreakMinutes] = useState(
    timerCtx.shortBreakTime
  );
  const [longBreakMinutes, setLongBreakMinutes] = useState(
    timerCtx.longBreakTime
  );
  const [seconds, setSeconds] = useState(0);
  const [completedIntervals, setCompletedIntervals] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!timerCtx.isTimerpaused) {
        if (timerCtx.phase === "focus") {
          if (seconds === 0) {
            if (focusMinutes === 0) {
              timerCtx.setPhase("shortBreak");
              setFocusMinutes(timerCtx.focusTime);
            } else {
              setSeconds(59);
              setFocusMinutes((prevMinute) => prevMinute - 1);
            }
          } else {
            setSeconds((prevSecond) => prevSecond - 1);
          }
        } else if (timerCtx.phase === "shortBreak") {
          if (seconds === 0) {
            if (shortBreakMinutes === 0) {
              timerCtx.setPhase("focus");
              setShortBreakMinutes(timerCtx.shortBreakTime);
              setCompletedIntervals((prev) => prev + 1);
            } else {
              setSeconds(59);
              setShortBreakMinutes((prevMinute) => prevMinute - 1);
            }
          } else {
            setSeconds((prevSecond) => prevSecond - 1);
          }
        } else if (timerCtx.phase === "longBreak") {
          if (seconds === 0) {
            if (longBreakMinutes === 0) {
              timerCtx.setPhase("focus");
              setLongBreakMinutes(timerCtx.longBreakTime);
              setCompletedIntervals(0);
            } else {
              setSeconds(59);
              setLongBreakMinutes((prevMinute) => prevMinute - 1);
            }
          } else {
            setSeconds((prevSecond) => prevSecond - 1);
          }
        }
      }
      
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, timerCtx.phase, focusMinutes, shortBreakMinutes, longBreakMinutes, timerCtx.isTimerpaused]);

  useEffect(() => {
    if (completedIntervals === timerCtx.timerInterval) {
      setPhase("longBreak");
    }
  }, [completedIntervals, timerCtx.timerInterval]);

  useEffect(() => {
    if (timerCtx.phase === "longBreak") {
      setSeconds(0);
      setLongBreakMinutes(timerCtx.longBreakTime);
    }
  }, [timerCtx.phase, timerCtx.longBreakTime]);

  let displayMinutes, displaySeconds;
  if (timerCtx.phase === "focus") {
    displayMinutes = focusMinutes;
  } else if (timerCtx.phase === "shortBreak") {
    displayMinutes = shortBreakMinutes;
  } else if (timerCtx.phase === "longBreak") {
    displayMinutes = longBreakMinutes;
  }

  displaySeconds = seconds;

  return (
    <>
      <span className="text-3xl font-extrabold text-slate-600 font-mono">
        {displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes}:
        {displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}
      </span>
    </>
  );
}
