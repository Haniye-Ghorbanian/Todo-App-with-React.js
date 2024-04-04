import { useContext } from "react";
import ModalCtx from "../../../../store/modalContext";
import crudCtx from "../../../../store/crudContext";

export default function Add() {
  
  const ctx = useContext(crudCtx);
  const modalCtx = useContext(ModalCtx);
  
  
  const addTask = () => {
    debugger
    ctx.handleTasks({type: "ADD_TASK", payload: ctx.task})
    modalCtx.handleModal();
  };
  return (
    <button
      className="font-semibold text-md text-white bg-blue-600 px-5 py-2 rounded-md"
      onClick={addTask}
    >
      add
    </button>
  );
}
