import { useContext } from "react";
import { habitTrackerContext } from "../../../store/habitTrackerContext";
import HabitDaysContainer from "./dingle habit days container/habitDaysContainer";
import HabitHeaderContainer from "./single habit header/singleHabitHeaderContainer";

export default function SingleHabitContainer({ habit }) {
  const habitCtx = useContext(habitTrackerContext);
  const habitFreqType = habitCtx.singleHabit.frequency.type;
  const habitBorderColor = habitCtx.singleHabit.themeColor.borderColor;
  const habitBgColor = habitCtx.singleHabit.themeColor.backgroundColor;
  const habitTextColor = habitCtx.singleHabit.themeColor.color;
  return (
    <div
      className="w-full h-40 bg-slate-200 rounded-lg shadow- p-6 flex flex-col items-center border justify-between mb-5 shadow "
      style={{ backgroundColor: `${habitBgColor}0D`}}
    >
      <HabitHeaderContainer habit={habit} />
      <HabitDaysContainer habit={habit} />
    </div>
  );
}
