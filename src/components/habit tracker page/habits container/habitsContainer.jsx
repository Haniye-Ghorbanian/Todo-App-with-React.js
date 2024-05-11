import { useContext } from "react"
import SingleHabitContainer from "../single habit/singleHabitContainer"
import { habitTrackerContext } from "../../../store/habitTrackerContext"

export default function HabitsContainer() {
    const habitCtx = useContext(habitTrackerContext)



    return (
        <div className="w-full flex flex-col items-center justify-between scroll-py-7">
            {habitCtx.habits.map(habit => (
                <SingleHabitContainer habit={habit} />
            ))}
        </div>
    )
}