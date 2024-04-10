import { useContext, useEffect, useRef } from "react";
import crudCtx from "../../../../store/crudContext";
import ModalCtx from "../../../../store/modalContext";

export default function ModalInputs() {
  const ctx = useContext(crudCtx);
  const modalCtx = useContext(ModalCtx);
  const titleRef = useRef(null);
  const descRef = useRef("");

  console.log(titleRef.current);

  useEffect(() => {
    modalCtx.isModalOpened ? titleRef.current?.focus() : "";
  }, [modalCtx.isModalOpened]);

  const handleTitleChange = (e) => {
    ctx.handleTasks({
      type: "ADD_TASK",
      payload: {
        ...ctx.task,
        title: e.target.value,
      },
    });
  };

  const handleDescChange = (e) => {
    console.log(e.target.value);
    ctx.handleTasks({
      type: "ADD_TASK",
      payload: {
        ...ctx.task,
        description: e.target.value,
      },
    });
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
          onChange={handleTitleChange}
          ref={titleRef}
        />
        <label className="font-semibold text-lg" id="description">
          Description
        </label>
        <input
          name="description"
          type="text"
          className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
          value={ctx.task.description}
          onChange={handleDescChange}
        />
      </div>
    </div>
  );
}
