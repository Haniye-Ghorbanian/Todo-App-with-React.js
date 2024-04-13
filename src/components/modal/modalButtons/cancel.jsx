import { useContext } from "react";
import ModalCtx from "../../../store/modalContext";

export default function Cancel() {
  const ctx = useContext(ModalCtx);

  const handleCancel = () => {
    ctx.isModalOpened ? ctx.handleModal() : ctx.handleEditModal();
  };
  
  return (
    <button
      className="text-md border-2 text-gray-500 border-blue-400 px-5 py-2 rounded-md"
      onClick={handleCancel}
    >
      cancel
    </button>
  );
}
