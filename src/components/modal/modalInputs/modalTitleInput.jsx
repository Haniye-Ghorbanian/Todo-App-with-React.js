import { useContext, useEffect, useRef } from "react";
import crudCtx from "../../../store/crudContext";
import ModalCtx from "../../../store/modalContext";


export default function TitleInput() {
  const ctx = useContext(crudCtx);
  const modalCtx = useContext(ModalCtx);
  const titleRef = useRef(null);

  useEffect(() => {
    if (modalCtx.isModalOpened || modalCtx.isEditModalOpened) {
      titleRef.current.focus();
    }
  }, [modalCtx.isModalOpened, modalCtx.isEditModalOpened]);

  const handleTitleChange = (e) => {
    modalCtx.isModalOpened
      ? ctx.handleTasks({
          type: "ADD_TASK",
          payload: {
            ...ctx.task,
            title: e.target.value,
          },
        })
      : ctx.handleTasks({
          type: "EDIT_TASK",
          payload: {
            ...ctx.currentTask,
            title: e.target.value,
          },
        });
  };

  return (
    <div className="mb-8">
      <label className="font-semibold text-lg" id="title" htmlFor="title">
        Title
      </label>
      <input
        name="title"
        type="text"
        className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 m-0"
        value={modalCtx.isModalOpened ? ctx.task.title : ctx.currentTask.title}
        onChange={handleTitleChange}
        ref={titleRef}
        readOnly={false}
      />
    </div>
  );
}
