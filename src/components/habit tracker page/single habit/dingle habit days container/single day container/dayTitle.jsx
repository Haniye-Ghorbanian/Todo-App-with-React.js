import { useContext } from "react";
import { habitTrackerContext } from "../../../../../store/habitTrackerContext";

export default function DayTitle({ day }) {
  const habitCtx = useContext(habitTrackerContext);
  const habitDaysThemeColor = habitCtx.singleHabit.themeColor.color;

  return (
    <span
      className={`text-slate-400 font-thin text-sm`}
      style={{ color: `${habitDaysThemeColor}99`, opacity: ".8" }}
    >
      {day}
    </span>
  );
}
