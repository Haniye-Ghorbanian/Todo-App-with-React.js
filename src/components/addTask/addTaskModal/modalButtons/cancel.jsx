import { useContext } from "react";
import ModalCtx from "../../../../store/modalContext";

export default function Cancel() {
    const ctx = useContext(ModalCtx)
  return (
    <button className="font-semibold text-md text-white bg-blue-600 px-5 py-2 rounded-md" onClick={ctx.handleModal}>
      cancel
    </button>
  );
}
