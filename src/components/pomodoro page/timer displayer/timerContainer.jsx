import { useContext, useState } from "react";
import TimerSetting from "../timer setting/timerSetting";
import timerContext from "../../../store/timerContext";
import Timer from "./timer";

export default function TimerContainer() {
  const timerCtx = useContext(timerContext);

  const handleOpenTimerSetting = () => {
    debugger;
    timerCtx.setIsTimerSettingOpen(true);
    timerCtx.setIsTimerDeleted(false);
    timerCtx.setIsEditClicked(false)
  };

  const getCancelSetting = (isSettingCanceled) => {
    !isSettingCanceled
      ? timerCtx.setIsTimerSettingOpen(false)
      : timerCtx.setIsTimerSettingOpen(true);
  };

  return (
    <div
      className={`w-full ${
        !timerCtx.isTimerSettingOpen && !timerCtx.isEditClicked
          ? "h-1/2"
          : "h-4/5"
      } flex justify-center p-7`}
    >
      {
        <span
          className={`${
            !timerCtx.isTimerSettingOpen && !timerCtx.isEditClicked
              ? "aspect-square rounded-full"
              : "w-full rounded-md"
          } transition-all ease-in-out duration-200 flex justify-center items-center shadow-2xl`}
        >
          {((!timerCtx.isTimerSettingOpen && !timerCtx.isSettingSaved) ||
            timerCtx.isTimerDeleted) && (
            <button
              className="font-bold text-2xl"
              onClick={handleOpenTimerSetting}
            >
              Click to start
            </button>
          )}
          {(timerCtx.isTimerSettingOpen || timerCtx.isEditClicked) && (
            <TimerSetting onCancelSetting={getCancelSetting} />
          )}
          {timerCtx.isSettingSaved &&
            !timerCtx.isEditClicked &&
            !timerCtx.isTimerDeleted && <Timer />}
        </span>
      }
    </div>
  );
}
