import { useContext } from "react";
import crudCtx from "../../../../store/crudContext";
import ModalCtx from "../../../../store/modalContext";
import TitleInput from "./modalTitleInput";
import DescriptionInput from "./modalDescriptionInput";

export default function ModalInputs() {
  const ctx = useContext(crudCtx);
  const modalCtx = useContext(ModalCtx);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      modalCtx.isModalOpened ? ctx.addTask() : ctx.handleEditTask();
      ctx.handleTasks({
        type: "ADD_TASK",
        payload: { title: "", description: "", is_done: false },
      });
      modalCtx.isModalOpened
        ? modalCtx.handleModal()
        : modalCtx.handleEditModal();
    }
  };

  return (
    <form onKeyDown={handleEnter}>
      <div className="flex flex-col space-y-5 w-full">
        <TitleInput />
        <DescriptionInput />
      </div>
    </form>
  );
}
