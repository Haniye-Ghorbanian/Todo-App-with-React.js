import DayCheckBox from "./dayCheckBox";
import DayTitle from "./dayTitle";

export default function DayContainer({day, date}) {
    return(
        <div className="h-full flex flex-col items-center justify-between pt-4 ">
            <DayTitle day={day} />
            <DayCheckBox date={date} day={day}/>
        </div>
    )
}