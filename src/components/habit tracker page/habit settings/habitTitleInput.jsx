import { useContext } from "react";
import { habitTrackerContext } from "../../../store/habitTrackerContext";

export default function HabitTitleInput() {
  const habitCtx = useContext(habitTrackerContext);

  const handleHabitTitleChange = (e) => {
    habitCtx.setSingleHabit(prevHabit => ({ ...prevHabit, title: e.target.value }));
  };
  

  return (
    <div>
      <label
        htmlFor="habit-title"
        className="font-semibold text-lg text-slate-600"
      >
        Habit title
      </label>
      <input
        type="text"
        id="habit-title"
        name="habit-title"
        className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 m-0 mt-2"
        onChange={handleHabitTitleChange}
        value={habitCtx.singleHabit.title}
      />
    </div>
  );
}
