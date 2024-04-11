import { useContext, useEffect } from "react";
import ModalButtons from "./modalButtons/modalButtons";
import ModalCtx from "../../../store/modalContext";
import ModalInputs from "./modalInputs/modalInputs";
import crudCtx from "../../../store/crudContext";

export default function AddTaskModal({ task }) {
  const ctx = useContext(ModalCtx);
 

  return (
    <>
      {(ctx.isModalOpened || ctx.isEditModalOpened) && (
        <div className="w-full h-screen absolute top-0 z-20 flex items-center justify-center backdrop-blur-sm">
          <div className="w-4/5 h-3/5 flex flex-col items-start justify-between bg-white shadow-lg px-10 py-16 rounded-lg">
            {ctx.isModalOpened ? <h3>Add Task</h3> : <h3>Edit Task</h3>}
            <ModalInputs />
            <ModalButtons />
          </div>
        </div>
      )}
    </>
  );
}
