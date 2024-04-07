import { useContext, useRef } from "react";
import crudCtx from "../../../../store/crudContext";

export default function ModalInputs() {
  const ctx = useContext(crudCtx);
  const titleRef = useRef("");
  const descRef = useRef("");

  const handleTitleChange = (e) => {
    ctx.handleTasks({
      type: "ADD_TASK",
      payload: {
        ...ctx.task,
        title: e.target.value
      },
    });
  };

  const handleDescChange = (e) => {
    console.log(e.target.value)
    ctx.handleTasks({
      type: "ADD_TASK",
      payload: {
        ...ctx.task,
        description: e.target.value
      },
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex flex-col space-y-5 w-full">
      <div>
        <form onSubmit={handleCreate}>
          <label className="font-semibold text-lg" id="title">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
            value={ctx.task.title}
            onChange={handleTitleChange}
          />
          <input
            name="description"
            type="text"
            className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
            value={ctx.task.desc}
            onChange={handleDescChange}
          />
        </form>
      </div>
    </div>
  );
}
