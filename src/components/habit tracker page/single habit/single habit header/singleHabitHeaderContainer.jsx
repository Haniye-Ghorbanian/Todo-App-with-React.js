import HabitFrequencyInfo from "./singleHabitFrequenncyInfoText";
import HabitTitle from "./singleHabitTitle";

export default function HabitHeaderContainer({habit}) {
    return (
        <div className="w-full h-1/3 flex items-center justify-between">
            <HabitTitle habit={habit} />
            <HabitFrequencyInfo habit={habit}/>
        </div>
    )
}