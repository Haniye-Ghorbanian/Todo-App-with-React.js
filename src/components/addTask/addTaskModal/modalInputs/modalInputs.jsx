import DatePicker from "./datePicker";
import TitleInput from "./title";

export default function ModalInputs({ getRef }) {
  return (
    <div className="flex flex-col space-y-5 w-full">
      <TitleInput getRef={getRef}/>
      <DatePicker />
    </div>
  );
}
