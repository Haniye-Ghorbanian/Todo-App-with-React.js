import HabitTrackerOption from "../menu options/habitTrackerOption";
import PomodoroTimerOption from "../menu options/pomodoroTimerOption";
import ProfileOption from "../menu options/profileOption";
import TodoListOption from "../menu options/todoListOption";

export default function MenuOptions() {
    return (
        <div className="flex flex-col aligm-start justify-center space-y-7">
            <TodoListOption />
            <HabitTrackerOption />
            <PomodoroTimerOption />
            <ProfileOption />
        </div>
    )
}