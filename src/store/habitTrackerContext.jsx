import { createContext } from "react";
import { useState } from "react";

export const habitTrackerContext = createContext({
  frequencyType: "general",
  setFrequencyType: () => {},

  habitTitle: "",
  setHabitTitle: () => {},

  generalFrequencyNum: null,
  setGeneralFrequencyNum: () => {},

  habits: [],
  setHabits: () => {},

  singleHabit: {},
  setSingleHabit : () => {}
});

export function HabitTrackerContext({ children }) {
  const [frequencyType, setFrequencyType] = useState("general");
  const [habitTitle, setHabitTitle] = useState("");
  const [habits, setHabits] = useState([]);
  const [generalFrequencyNum, setGeneralFrequencyNum ] = useState(null)
  const [singleHabit, setSingleHabit] = useState({
    title: "",
    frequency: {
      type: "general",
      times: 1,
      days: [],
    },
    themeColor: {
      color: "",
      backgroundColor: "",
      borderColor: ""
    },
  });

  return (
    <habitTrackerContext.Provider
      value={{
        frequencyType,
        habitTitle,
        habits,
        singleHabit,
        generalFrequencyNum,
        setFrequencyType,
        setHabitTitle,
        setHabits,
        setSingleHabit,
        setGeneralFrequencyNum
      }}
    >
      {children}
    </habitTrackerContext.Provider>
  );
}
