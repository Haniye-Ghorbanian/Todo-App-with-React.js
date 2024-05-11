import { useContext } from "react";
import { createPortal } from "react-dom";
import ModalCtx from "../../store/modalContext";
import Modal from "../modal/modal";
import HabitsContainer from "./habits container/habitsContainer";
import OpenAddTaskModalBtn from "../modal/openAddTaskModalBtn";


export default function HabitTrackerPage() {
  const modalContext = useContext(ModalCtx);

  return (
    <div
      className={`w-full h-screen bg-slate-50 flex flex-col items-center justify-between px-6 py-6 ${
        modalContext.isModalOpened || modalContext.isEditModalOpened
          ? "overflow-hidden"
          : "overflow-scroll"
      }`}
    >
      {createPortal(<Modal />, document.getElementById("modal-overlay"))}

      <div
        className={`w-full transition-all duration-300 delay-75 h-screen pt-28 ${
          modalContext.isMenuOpened ? "blur-sm ml-32" : ""
        }`}
      >
        <h1 className="font-bold text-slate-600 text-2xl mb-10">Track your habits here!</h1>
        <HabitsContainer />
        <OpenAddTaskModalBtn />
        
      </div>
    </div>
  );
}
