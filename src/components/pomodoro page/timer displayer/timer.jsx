import { useContext, useState, useEffect } from "react";
import timerContext from "../../../store/timerContext";

export default function Timer() {
  const timerCtx = useContext(timerContext);
  const [focusSecond, setFocusSecond] = useState(60);
  const [focusMinute, setFocusMinute] = useState(timerCtx.focusTime);
  const [shortBreakMinute, setShortBreakMinute] = useState(timerCtx.focusTime);
  const [shortBreakSecond, setShortBreakSecond] = useState(60);
  const [longBreakMinute, setLongBreakMinute] = useState(timerCtx.focusTime);
  const [longBreakSecond, setLongBreakSecond] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      setFocusSecond(focusSecond - 1);
      focusSecond === 0 && focusMinute >= 1
        ? setFocusMinute(focusMinute - 1)
        : "";
      focusSecond === 0 && focusMinute === 0
        ? setSecond(focusSecond) && setFocusMinute(focusMinute)
        : "";
    }, 1000);
  }, [minute, second]);

  return <span>{`0${minute}:${second}`}</span>;
}
