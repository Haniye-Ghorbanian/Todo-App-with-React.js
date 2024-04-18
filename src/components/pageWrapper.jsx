import { createPortal } from "react-dom";
import HeadToolbarWrapper from "./head toolbar/headToolbarWrapper";
import TaskWrapper from "./tasks/tasksWrapper";
import WelcomBanner from "./welcome banner/welcomeBanner";
import ModalCtx from "../store/modalContext";
import OpenAddTaskModalBtn from "./modal/openAddTaskModalBtn";
import Modal from "./modal/modal";
import { useContext } from "react";
import Menu from "./head toolbar/menu/menu";

export default function PageWrapper() {
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

      {modalContext.isMenuOpened && <Menu />}

      <div
        className={`w-full transition-all duration-300 delay-75 h-screen  ${
          modalContext.isMenuOpened ? "blur-sm ml-32" : "flex flex-col "
        }`}
      >
        <HeadToolbarWrapper />
        <WelcomBanner />
        <TaskWrapper />
        <OpenAddTaskModalBtn />
      </div>
    </div>
  );
}
