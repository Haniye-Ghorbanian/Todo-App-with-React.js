import { useContext } from "react";
import ModalCtx from "../../store/modalContext";
import ModalInputs from "../modal/modalInputs/modalInputs";
import ModalButtons from "../modal/modalButtons/modalButtons";

export default function Modal() {
  const ctx = useContext(ModalCtx);

  return (
    <>
      {(ctx.isModalOpened || ctx.isEditModalOpened) && (
        <div className="w-full h-screen absolute top-0 z-20 flex items-center justify-center backdrop-blur-sm">
          <div className="w-4/5 h-3/5 flex flex-col items-start justify-between bg-white shadow-lg px-10 py-16 rounded-lg">
          <h3 className="font-extrabold text-2xl text-slate-700">{ctx.isModalOpened ? "Add Task" : "Edit Task"}</h3>
            <ModalInputs />
            <ModalButtons />
          </div>
        </div>
      )}
    </>
  );
}
