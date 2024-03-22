import { useContext } from "react";
import ModalCtx from "../../../../store/modalContext";

export default function Cancel() {
  const ctx = useContext(ModalCtx);
  return (
    <button
      className="text-md border-2 text-gray-500 border-blue-600 px-5 py-2 rounded-md"
      onClick={ctx.handleModal}
    >
      cancel
    </button>
  );
}
