import { useContext } from "react";
import crudCtx from "../../../store/crudContext";
import ModalCtx from "../../../store/modalContext";

export default function DescriptionInput() {
  const ctx = useContext(crudCtx);
  const modalCtx = useContext(ModalCtx);

  const handleDescChange = (e) => {
    modalCtx.isModalOpened
      ? ctx.handleTasks({
          type: "ADD_TASK",
          payload: {
            ...ctx.task,
            description: e.target.value,
          },
        })
      : ctx.handleTasks({
          type: "EDIT_TASK",
          payload: {
            ...ctx.currentTask,
            description: e.target.value,
          },
        });
  };

  return (
    <>
      <label
        className="font-semibold text-lg"
        id="description"
        htmlFor="description"
      >
        Description
      </label>
      <input
        name="description"
        type="text"
        className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-1"
        value={
          modalCtx.isModalOpened
            ? ctx.task.description
            : ctx.currentTask.description
        }
        onChange={handleDescChange}
        readOnly={false}
      />
    </>
  );
}
