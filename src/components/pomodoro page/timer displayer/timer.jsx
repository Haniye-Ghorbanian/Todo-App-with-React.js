import { useContext, useState, useEffect } from "react";
import timerContext from "../../../store/timerContext";

export default function Timer() {
  const timerCtx = useContext(timerContext);
  const [phase, setPhase] = useState("focus");
  const [focusMinutes, setFocusMinutes] = useState(timerCtx.focusTime);
  const [shortBreakMinutes, setShortBreakMinutes] = useState(
    timerCtx.shortBreakTime
  );
  const [longBreakMinutes, setLongBreakMinutes] = useState(
    timerCtx.longBreakTime
  );
  const [seconds, setSeconds] = useState(0);
  const [intervalCount, setIntervalCount] = useState(timerCtx.timerInterval);
  const [completedIntervals, setCompletedIntervals] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!timerCtx.isTimerpaused) {
        if (phase === "focus") {
          if (seconds === 0) {
            if (focusMinutes === 0) {
              setPhase("shortBreak");
              setFocusMinutes(timerCtx.focusTime);
            } else {
              setSeconds(59);
              setFocusMinutes((prevMinute) => prevMinute - 1);
            }
          } else {
            setSeconds((prevSecond) => prevSecond - 1);
          }
        } else if (phase === "shortBreak") {
          if (seconds === 0) {
            if (shortBreakMinutes === 0) {
              setPhase("focus");
              setShortBreakMinutes(timerCtx.shortBreakTime);
              setCompletedIntervals((prev) => prev + 1);
            } else {
              setSeconds(59);
              setShortBreakMinutes((prevMinute) => prevMinute - 1);
            }
          } else {
            setSeconds((prevSecond) => prevSecond - 1);
          }
        } else if (phase === "longBreak") {
          if (seconds === 0) {
            if (longBreakMinutes === 0) {
              setPhase("focus");
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
  }, [seconds, phase, focusMinutes, shortBreakMinutes, longBreakMinutes, timerCtx.isTimerpaused]);

  useEffect(() => {
    if (completedIntervals === intervalCount) {
      setPhase("longBreak");
    }
  }, [completedIntervals, intervalCount]);

  useEffect(() => {
    if (phase === "longBreak") {
      setSeconds(0);
      setLongBreakMinutes(timerCtx.longBreakTime);
    }
  }, [phase, timerCtx.longBreakTime]);

  let displayMinutes, displaySeconds;
  if (phase === "focus") {
    displayMinutes = focusMinutes;
  } else if (phase === "shortBreak") {
    displayMinutes = shortBreakMinutes;
  } else if (phase === "longBreak") {
    displayMinutes = longBreakMinutes;
  }

  displaySeconds = seconds;

  return (
    <>
      <span>
        {phase === "focus" && `Focus: `}
        {phase === "shortBreak" && `Short Break: `}
        {phase === "longBreak" && `Long Break: `}
        {displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes}:
        {displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}
      </span>
    </>
  );
}
