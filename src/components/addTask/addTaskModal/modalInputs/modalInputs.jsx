import { useContext, useEffect, useRef } from "react";
import crudCtx from "../../../../store/crudContext";
import ModalCtx from "../../../../store/modalContext";

export default function ModalInputs() {
  const ctx = useContext(crudCtx);
  const modalCtx = useContext(ModalCtx);
  const titleRef = useRef(null);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      modalCtx.isModalOpened ? ctx.addTask() : ctx.handleEditTask()
      ctx.handleTasks({
        type: "ADD_TASK",
        payload: { title: "", description: "", is_done: false },
      });
      modalCtx.isModalOpened ? modalCtx.handleModal() : modalCtx.handleEditModal();
    }
  };

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
    <form onKeyDown={handleEnter}>
      <div className="flex flex-col space-y-5 w-full">
        <div>
          <label className="font-semibold text-lg" id="title" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
            value={
              modalCtx.isModalOpened ? ctx.task.title : ctx.currentTask.title
            }
            onChange={handleTitleChange}
            ref={titleRef}
            readOnly={false}
          />
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
            className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
            value={
              modalCtx.isModalOpened
                ? ctx.task.description
                : ctx.currentTask.description
            }
            onChange={handleDescChange}
            readOnly={false}
          />
        </div>
      </div>
    </form>
  );
}
