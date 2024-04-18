import { useContext } from "react";
import ModalCtx from "../../../../store/modalContext";
import crudCtx from "../../../../store/crudContext";

export default function EditIcon({ task }) {
  const modalCtx = useContext(ModalCtx);
  const ctx = useContext(crudCtx);

  const handleEdit = () => {
    !modalCtx.isMenuOpened
      ? (modalCtx.handleEditModal(),
        ctx.handleTasks({ type: "SET_SELECTED_TASK", payload: task }))
      : "";
  };

  return (
    <button onClick={handleEdit}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18px"
        height="18px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M18.3785 8.44975L8.9636 17.8648C8.6844 18.144 8.3288 18.3343 7.94161 18.4117L4.99988 19.0001L5.58823 16.0583C5.66566 15.6711 5.85597 15.3155 6.13517 15.0363L15.5501 5.62132M18.3785 8.44975L19.7927 7.03553C20.1832 6.64501 20.1832 6.01184 19.7927 5.62132L18.3785 4.20711C17.988 3.81658 17.3548 3.81658 16.9643 4.20711L15.5501 5.62132M18.3785 8.44975L15.5501 5.62132"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
