import { useContext } from "react";
import TimerContainer from "./timer displayer/timerContainer";
import timerContext from "../../store/timerContext";
import TimerButtonsContainer from "./timer displayer/timer displayer buttons/timerButtonsContainer";

export default function PomdoroTimerPage() {
  const timerCtx = useContext(timerContext);

  let timerPhaseText;

  if (timerCtx.phase === "focus") {
    timerPhaseText = "Time to focus!";
  } else if (timerCtx.phase === "shortBreak") {
    timerPhaseText = "Take a short break!";
  } else {
    timerPhaseText = "Good job! Get ready for your next focus session!";
  }
  return (
    <div className="w-100 h-screen py-16 px-6 flex flex-col justify-evenly items-center">
      {timerCtx.isSettingSaved &&
        !timerCtx.isEditClicked &&
        !timerCtx.isTimerDeleted && (
          <span className="text-center text-2xl font-bold pt-8 mt-8 text-slate-600">{timerPhaseText}</span>
        )}
      <TimerContainer></TimerContainer>
      {!timerCtx.isTimerDeleted &&
        timerCtx.isSettingSaved &&
        !timerCtx.isEditClicked && <TimerButtonsContainer />}
    </div>
  );
}
