import { createContext, useState } from "react";

const timerContext = createContext({
  focusTime: 1,
  shortBreakTime: 10,
  longBreakTime: 15,
  timerInterval: 1,
  isSettingSaved: false,
  isTimerSettingOpen: false,
  setFocusTime: () => {},
  setShortBreakTime: () => {},
  setLongBreakTime: () => {},
  setTimerInterval: () => {},
  setIsSettingSaved: () => {},
  setIsTimerSettingOpen: () => {}
});

export function TimerContext({ children }) {
  const [focusTime, setFocusTime] = useState(1);
  const [shortBreakTime, setShortBreakTime] = useState(10);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [timerInterval, setTimerInterval] = useState(1);
  const [isSettingSaved, setIsSettingSaved] = useState(false);
  const [isTimerSettingOpen, setIsTimerSettingOpen] = useState(false);



  return (
    <timerContext.Provider
      value={{
        focusTime,
        shortBreakTime,
        longBreakTime,
        timerInterval,
        isSettingSaved,
        isTimerSettingOpen,
        setFocusTime,
        setShortBreakTime,
        setLongBreakTime,
        setTimerInterval,
        setIsSettingSaved,
        setIsTimerSettingOpen
      }}
    >
      {children}
    </timerContext.Provider>
  );
}

export default timerContext