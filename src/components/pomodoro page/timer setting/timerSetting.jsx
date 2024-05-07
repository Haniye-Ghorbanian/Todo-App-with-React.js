import TimerInterval from "./Interval";
import FocusTime from "./focusTime";
import LongBreak from "./longBreak";
import ShortBreak from "./shortBreak";
import TimerSettingButtons from "./timer setting buttons/timerSettingButtons";

export default function TimerSetting({onCancelSetting}) {
  return (
    <div className="flex flex-col w-full h-full items-center justify-around py-5">
      <span className="font-bold text-xl text-slate-500 mb-4">
        Add a new timer
      </span>

      <div className="flex flex-col w-full items-center justify-between space-y-6">
        <FocusTime />
        <ShortBreak />
        <LongBreak />
        <TimerInterval />
      </div>

      <TimerSettingButtons onCancelSetting={onCancelSetting}/>
    </div>
  );
}
