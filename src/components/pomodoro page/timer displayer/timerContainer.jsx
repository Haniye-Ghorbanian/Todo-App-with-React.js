import { useContext, useState } from "react";
import TimerSetting from "../timer setting/timerSetting";
import timerContext from "../../../store/timerContext";
import Timer from "./timer";

export default function TimerContainer() {
  const timerCtx = useContext(timerContext);

  const handleOpenTimerSetting = () => {
    timerCtx.setIsTimerSettingOpen(!timerCtx.isTimerSettingOpen);
  };

  const getCancelSetting = (isSettingCanceled) => {
    !isSettingCanceled
      ? setIsTimerSettingOpen(false)
      : setIsTimerSettingOpen(true);
  };

  return (
    <div
      className={`w-full ${
        !timerCtx.isTimerSettingOpen ? "h-1/2" : "h-4/5"
      } flex justify-center p-7`}
    >
      {
        <span
          className={`${
            !timerCtx.isTimerSettingOpen
              ? "aspect-square rounded-full"
              : "w-full rounded-md"
          } transition-all ease-in-out duration-200 flex justify-center items-center shadow-2xl`}
        >
          {!timerCtx.isTimerSettingOpen && !timerCtx.isSettingSaved &&(
            <button
              className="font-bold text-2xl"
              onClick={handleOpenTimerSetting}
            >
              Click to start
            </button>
          )}
          {timerCtx.isTimerSettingOpen && (
            <TimerSetting onCancelSetting={getCancelSetting} />
          )}
          {timerCtx.isSettingSaved && <Timer />}
        </span>
      }
    </div>
  );
}
