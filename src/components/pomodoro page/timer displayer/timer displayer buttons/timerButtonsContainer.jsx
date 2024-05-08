import DeleteTimer from "./delete";
import EditTimer from "./edit";
import PuaseStartTimer from "./pauseStart";

export default function TimerButtonsContainer() {
    return (
        <div className="w-full flex items-center justify-between px-8">
            <DeleteTimer />
            <PuaseStartTimer />
            <EditTimer />
        </div>
    )
}