import DayContainer from "./single day container/singleDayContainer";

export default function HabitDaysContainer() {
  const today = new Date();
  const todayDate = today.getDate();

  return (
    <div className="w-full h-2/3 flex justify-between items-center">
      {new Array(7).fill(0).map((_, index) => {
        {/* handle days of the week in sequence  */}
        const date = (todayDate + index) % 31;
         {/* handle dates in sequence  */}
        const shortDayName = new Date(
          today.setDate(todayDate + index)
        ).toLocaleDateString("en-US", { weekday: "short" });

        return <DayContainer key={index} day={shortDayName} date={date} />;
      })}
    </div>
  );
}
