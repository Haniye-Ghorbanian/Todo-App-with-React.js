import { useState, useContext } from "react";
import { habitTrackerContext } from "../../../../../store/habitTrackerContext";

export default function DayCheckBox({ date, day }) {
  const [dayChecked, setDayChecked] = useState({
    isChecked: false,
    dayTitle: "",
  });
  const [checkedDaysCount, setCheckedDaysCount] = useState({
    count: 0,
    allFreqTimesChecked: false,
  });
  const habitCtx = useContext(habitTrackerContext);
  const habitFreqType = habitCtx.singleHabit.frequency.type;
  const habitBorderColor = habitCtx.singleHabit.themeColor.borderColor;
  const habitBgColor = habitCtx.singleHabit.themeColor.backgroundColor;
  const habitTextColor = habitCtx.singleHabit.themeColor.color;
  const habitFreqTimes = habitCtx.singleHabit.frequency.times;

  const handleHabitDayCheck = (e) => {
    setDayChecked((prev) => ({ ...prev, isChecked: e.target.checked }));
    setDayChecked((prev) => ({ ...prev, dayTitle: e.target.name }));
  
    setCheckedDaysCount((prev) => {
      const newCount = prev.count + (e.target.checked ? 1 : -1);
      const allFreqTimesChecked = newCount === habitFreqTimes;
      return { count: newCount, allFreqTimesChecked };
    });
    console.log(checkedDaysCount.allFreqTimesChecked, checkedDaysCount.count)
  };
  
      
  return (
    <div className="h-1/2 flex items-center justify-center relative">
      <input
        type="checkbox"
        onChange={handleHabitDayCheck}
        name={day}
        id={day}
        {...checkedDaysCount.allFreqTimesChecked && disabled}
        className={`appearance-none bg-none border border-slate-600 h-full aspect-square rounded-full ${
          dayChecked.isChecked ? "bg-slate-600 text-white" : ""
        } ${checkedDaysCount.allFreqTimesChecked && "border-slate-500"}`}
        style={
          habitFreqType === "general" &&
          dayChecked.dayTitle === day &&
          dayChecked.isChecked
            ? { backgroundColor: habitBgColor, borderColor: habitBorderColor }
            : habitFreqType === "general"
            ? { borderColor: habitBorderColor }
            : dayChecked.dayTitle === date
            ? { backgroundColor: habitBgColor }
            : null
        }
      />
      <label
        htmlFor={date}
        className={`absolute pointer-events-none ${
          dayChecked.dayTitle === day && dayChecked.isChecked
            ? "text-white"
            : " text-slate-600"
        } ${checkedDaysCount.allFreqTimesChecked && "text-slate-500"}`}
      >
        {date}
      </label>
    </div>
  );
}
