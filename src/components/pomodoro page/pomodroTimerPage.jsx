import { useContext } from "react";
import TimerContainer from "./timer displayer/timerContainer";
import timerContext from "../../store/timerContext";
import TimerButtonsContainer from "./timer displayer/timer displayer buttons/timerButtonsContainer";

export default function PomdoroTimerPage() {
  const timerCtx = useContext(timerContext);
  return (
    <div className="w-100 h-screen py-16 px-6 flex flex-col justify-evenly items-center">
      <TimerContainer></TimerContainer>
      {!timerCtx.isTimerDeleted &&
        timerCtx.isSettingSaved &&
        !timerCtx.isEditClicked && <TimerButtonsContainer />}
    </div>
  );
}
