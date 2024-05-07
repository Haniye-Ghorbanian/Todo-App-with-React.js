import SettingCancel from "./cancel";
import SettingSave from "./save";

export default function TimerSettingButtons({onCancelSetting}) {
    return (
        <div className="w-full h-7 px-6 mt-6 flex flex-row-reverse justify-between items-center">
            <SettingSave />
            <SettingCancel onCancelSetting={onCancelSetting}/>
        </div>
    )
}