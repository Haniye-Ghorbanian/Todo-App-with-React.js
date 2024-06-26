import { useContext, useState } from "react";
import timerContext from "../../../../store/timerContext";

export default function SettingSave() {
  const timerCtx = useContext(timerContext)

  const handleSaveSetting = () => {
    debugger
    timerCtx.setIsSettingSaved(true);
    timerCtx.setIsTimerSettingOpen(false)
    timerCtx.setIsEditClicked(false)
    timerCtx.setIsTimerDeleted(false)
  };

  return (
    <button
      className="w-3/5 h-full border px-3 py-5 rounded-full flex items-center justify-center bg-blue-500 text-white font-bold shadow-md"
      onClick={handleSaveSetting}
    >
      Save
    </button>
  );
}
