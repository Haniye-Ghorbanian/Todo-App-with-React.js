import { useContext } from "react";
import ModalButtons from "./modalButtons/modalButtons";
import ModalInputs from "./modalInputs/modalInputs";
import ModalCtx from "../../../store/modalContext";

export default function AddTaskModal() {
  const ctx = useContext(ModalCtx);

  let taskRef;
  const getRef = (ref) => {
    taskRef = ref;
    console.log(ref)
  };

  return (
    <>
      {ctx.isModalOpened && (
        <div className="w-full h-screen absolute top-0 z-20 flex items-center justify-center backdrop-blur-sm">
          <div className="w-4/5 h-3/5 flex flex-col items-start justify-between bg-white shadow-lg px-10 py-16 rounded-lg">
            <ModalInputs getRef={getRef} />
            <ModalButtons taskRef={taskRef} />
          </div>
        </div>
      )}
    </>
  );
}
