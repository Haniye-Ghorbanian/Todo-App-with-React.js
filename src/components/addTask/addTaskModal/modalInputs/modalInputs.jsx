import DatePicker from "./datePicker";
import TitleInput from "./title";
import crudCtx from "../../../../store/crudContext";

export default function ModalInputs() {
  const ctx = useContext(crudCtx);

  const handleChange = (e) => {
    ctx.handleTasks({ type: "SET_TASK", payload: { title: e.target.value } });
  };

  return (
    <div className="flex flex-col space-y-5 w-full">
      <div>
        <label className="font-semibold text-lg" id="title">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
          value={ctx.task.title}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
