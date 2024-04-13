import { useContext } from "react";
import crudCtx from "../../../../store/crudContext";
import ModalCtx from "../../../../store/modalContext";

export default function Add() {
  const ctx = useContext(crudCtx);
  const modalCtx = useContext(ModalCtx);

  const handleBtn = () => {
    modalCtx.isModalOpened
      ? (ctx.addTask(), modalCtx.handleModal())
      : (ctx.handleEditTask(), modalCtx.handleEditModal());
  };

  return (
    <button
      className="font-semibold text-md text-white bg-blue-600 px-5 py-2 rounded-md"
      onClick={handleBtn}
    >
      {modalCtx.isModalOpened ? "Add" : "Edit"}
    </button>
  );
}
