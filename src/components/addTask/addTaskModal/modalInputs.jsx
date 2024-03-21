import DatePicker from "./modalInputs/datePicker";
import TitleInput from "./modalInputs/title";

export default function ModalInputs() {
  return (
    <div className="flex flex-col space-y-5 w-full">
      <TitleInput />
      <DatePicker />
    </div>
  );
}
