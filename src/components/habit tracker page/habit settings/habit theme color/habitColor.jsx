import { useContext, useState } from "react";
import { habitTrackerContext } from "../../../../store/habitTrackerContext";

export default function HabitColor() {
  const habitCtx = useContext(habitTrackerContext);
  const [selectedColor, setSelectedColor] = useState("");

  const bgColors = [
    "#2563eb",
    "#ea580c",
    "#db2777",
    "#16a34a",
    "#9333ea",
  ];

  const handleHabitColorChange = (e) => {
    
    const color = e.target.value
    setSelectedColor(color);
    // const parts = e.target.value.split("-"); 
    // const baseColor = parts.slice(1).join("-");
    // console.log(`text-${baseColor}`)
    habitCtx.setSingleHabit((prevHabit) => ({
      ...prevHabit,
      themeColor: {
        ...prevHabit.themeColor,
        color: color,
        backgroundColor: color,
        borderColor: color
      },
    }));
  };

  return (
    <div className="w-full flex flex-col items-start justify-center space-y-4">
      <span>Color theme</span>
      <div className="w-full flex items-center justify-between">
        {bgColors.map((colorCode, index) => (
          <label key={index} htmlFor={`${colorCode}`}>
            <input
              type="radio"
              name="colorTheme"
              id={`${colorCode}`}
              value={colorCode}
              className={`appearance-none w-10 ${colorCode} aspect-square rounded-xl transition-all duration-200 ${
                selectedColor === colorCode
                  ? "-translate-y-1 shadow-lg shadow-slate-400"
                  : ""
              }`}
              style={{backgroundColor: colorCode}}
              onChange={handleHabitColorChange}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
