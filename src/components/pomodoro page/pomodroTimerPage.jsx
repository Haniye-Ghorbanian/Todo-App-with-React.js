import TimerContainer from "./timer displayer/timerContainer";
import Timer from "./timer displayer/timerContainer";

export default function PomdoroTimerPage() {
  return (
    <div className="w-100 h-screen py-16 px-6 flex flex-col justify-evenly items-center">
      <TimerContainer></TimerContainer>
    </div>
  )
}
