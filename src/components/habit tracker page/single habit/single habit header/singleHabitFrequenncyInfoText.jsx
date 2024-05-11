import { useContext } from "react";
import { habitTrackerContext } from "../../../../store/habitTrackerContext";

export default function HabitFrequencyInfo({habit}) {
  const habitCtx = useContext(habitTrackerContext);
  let freqTimes;
  habit.frequency.type === "general"
    ? (freqTimes = habit.frequency.times)
    : freqTimes = habit.frequency.days.length;

  return (
    <span className="text-sm font-semibold text-slate-400 ">{`${freqTimes} times a week`}</span>
  );
}
