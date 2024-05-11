import { useContext, useState, useEffect, useRef } from "react";
import { habitTrackerContext } from "../../../../store/habitTrackerContext";

export default function HabitSpecificFrequency() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const habitCtx = useContext(habitTrackerContext);
  const habitDays = habitCtx.singleHabit.frequency.days;

  const [isChecked, setIsChecked] = useState(false); 
  const dayCheckBoxRef = useRef(null) 

  const handleSpecificFreq = (e) => {
    habitCtx.setSingleHabit((prevHabit) => ({
      ...prevHabit,
      frequency: {
        ...prevHabit.frequency,
        days: [...prevHabit.frequency.days, e.target.name],
      },
    }));

    setIsChecked(!isChecked); // Update checkbox state on change
    console.log(dayCheckBoxRef)
  };

 
  return (
    <ul className="w-full flex justify-between items-center h-2/3 ">
      {daysOfWeek.map((day, index) => (
        <li key={index} ref={dayCheckBoxRef} className={`w-full h-full flex items-center justify-center relative checked:animate-bounce`}>
          <input
            type="checkbox"
            name={day}
            id={day}
            
            className={`appearance-none border w-4/5 aspect-square border-blue-600 rounded-full checked:animate-bounce ${
              habitDays.includes(day) ? "bg-blue-600 " : "bg-none"
            }`}
            onChange={handleSpecificFreq}
          />
          <label
            htmlFor={day}
            className={`absolute pointer-events-none text-xs ${
              habitDays.includes(day) ? "text-white" : "text-slate-400"
            }`}
          >
            {day}
          </label>
        </li>
      ))}
    </ul>
  );
}
