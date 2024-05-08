import { createContext, useState } from "react";

const timerContext = createContext({
  focusTime: 1,
  shortBreakTime: 10,
  longBreakTime: 15,
  timerInterval: 1,
  isSettingSaved: false,
  isTimerSettingOpen: false,
  isEditClicked: false,
  isTimerpaused: false,
  isTimerDeleted: false,
  setFocusTime: () => {},
  setShortBreakTime: () => {},
  setLongBreakTime: () => {},
  setTimerInterval: () => {},
  setIsSettingSaved: () => {},
  setIsTimerSettingOpen: () => {},
  setIsEditClicked: () => {},
  setIsTimerPause: () => {},
  setIsTimerDeleted: () => {}
});

export function TimerContext({ children }) {
  const [focusTime, setFocusTime] = useState(1);
  const [shortBreakTime, setShortBreakTime] = useState(10);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [timerInterval, setTimerInterval] = useState(1);
  const [isSettingSaved, setIsSettingSaved] = useState(false);
  const [isTimerSettingOpen, setIsTimerSettingOpen] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isTimerpaused, setIsTimerPause] = useState(false);
  const [isTimerDeleted, setIsTimerDeleted] = useState(false)






  return (
    <timerContext.Provider
      value={{
        focusTime,
        shortBreakTime,
        longBreakTime,
        timerInterval,
        isSettingSaved,
        isTimerSettingOpen,
        isEditClicked,
        isTimerpaused,
        isTimerDeleted,
        setFocusTime,
        setShortBreakTime,
        setLongBreakTime,
        setTimerInterval,
        setIsSettingSaved,
        setIsTimerSettingOpen,
        setIsEditClicked,
        setIsTimerPause,
        setIsTimerDeleted
      }}
    >
      {children}
    </timerContext.Provider>
  );
}

export default timerContext