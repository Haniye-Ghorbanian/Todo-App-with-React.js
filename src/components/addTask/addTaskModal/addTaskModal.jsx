import ModalButtons from "./modalButtons";
import ModalInputs from "./modalInputs";

export default function AddTaskModal() {
  return (
    <div className="w-full h-screen absolute top-0 z-20 flex items-center justify-center backdrop-blur-sm">
      <div className="w-4/5 h-3/5 flex flex-col items-start justify-between bg-white shadow-lg px-10 py-16 rounded-lg">
        
        <ModalInputs />
        <ModalButtons />
      </div>
    </div>
  );
}
