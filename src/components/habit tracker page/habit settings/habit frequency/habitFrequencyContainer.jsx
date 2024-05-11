import { useContext, useState } from "react";
import HabitGeneralFrequency from "./habitGeneralFrequency";
import HabitSpecificFrequency from "./habitSpecificFrequency";
import { habitTrackerContext } from "../../../../store/habitTrackerContext";

export default function HabitFrequencyContainer() {
  const habitCtx = useContext(habitTrackerContext);
  const frequencyType = habitCtx.singleHabit.frequency.type;

  const handleFrequencyType = () => {
    habitCtx.singleHabit.frequency.type === "specific"
      ? habitCtx.setSingleHabit((prevHabit) => ({
          ...prevHabit,
          frequency: { ...prevHabit.frequency, type: "general" },
        }))
      : habitCtx.setSingleHabit((prevHabit) => ({
          ...prevHabit,
          frequency: { ...prevHabit.frequency, type: "specific" },
        }));
  };

  return (
    <div className="w-full  flex flex-col items-start justify-between">
      <div
        className={`w-full flex justify-between items-center h-1/2 ${
          frequencyType === "specific" ? "flex-col space-y-3" : ""
        } `}
      >
        <span
          className={`w-full font-semibold text-lg text-slate-600 ${
            frequencyType === "specific" ? "h-1/2" : ""
          }`}
        >
          Habit Frequency
        </span>
        {frequencyType === "general" && <HabitGeneralFrequency />}
        {frequencyType === "specific" && <HabitSpecificFrequency />}
      </div>
      <button className="text-slate-400 text-sm" onClick={handleFrequencyType}>
        {` or choose ${
          frequencyType === "specific" ? "generally" : "specific days"
        }`}
      </button>
    </div>
  );
}
