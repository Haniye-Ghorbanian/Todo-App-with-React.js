import { useContext } from "react";
import ModalCtx from "../../../../store/modalContext";
import crudCtx from "../../../../store/crudContext";

export default function Add() {
  const ctx = useContext(crudCtx);
  const modalCtx = useContext(ModalCtx);

  const addTask = async () => {
    debugger;

    try {
      await fetch("http://127.0.0.1:8000/api/todos/", {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ctx.task),
      });
      ctx.handleTasks({
        type: "ADD_TASK",
        payload: { title: "", description: "", isDone: null },
      });
      ctx.fetchData();
    } catch {}
    ctx.handleTasks({ type: "ADD_TASK", payload: ctx.task });
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
