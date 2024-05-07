import { useState } from "react";

export default function SettingCancel({ onCancelSetting }) {
  const [isSettingCanceled, setIsSettingCanceled] = useState(false);

  const handleCancelSetting = () => {
    setIsSettingCanceled(!isSettingCanceled);
    onCancelSetting(isSettingCanceled)
  };


  return (
    <button
      className="w-2/6 h-full border px-3 py-5 rounded-full flex items-center justify-center border-blue-500 text-slate-400"
      onClick={handleCancelSetting}
    >
      Cancel
    </button>
  );
}
