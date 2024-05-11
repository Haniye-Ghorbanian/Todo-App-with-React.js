import HabitFrequencyContainer from "./habit frequency/habitFrequencyContainer";
import HabitColor from "./habit theme color/habitColor";
import HabitTitleInput from "./habitTitleInput";

export default function HabitSettingsContainer() {
    return (
        <div className="h-full w-full py-14 flex flex-col justify-between">
            <HabitTitleInput />
            <HabitFrequencyContainer />
            <HabitColor />
        </div>
    )
}