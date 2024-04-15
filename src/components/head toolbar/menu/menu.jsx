import HabitTrackerOption from "./menu options/habitTrackerOption";
import PomodoroTimerOption from "./menu options/pomodoroTimerOption";
import ProfileOption from "./menu options/profileOption";
import TodoListOption from "./menu options/todoListOption";

export default function Menu() {
    return(
        <div className="w-4/6 h-screen bg-blue-700 fixed top-0 left-0 z-20 pt-32 pl-8 flex flex-col space-y-10 shadow-lg">
            <TodoListOption />
            <HabitTrackerOption />
            <PomodoroTimerOption />
            <ProfileOption />
        </div>
    )
}