import { createPortal } from "react-dom";
import HeadToolbarWrapper from "./head toolbar/headToolbarWrapper";
import TaskWrapper from "./tasks/tasksWrapper";
import WelcomBanner from "./welcome banner/welcomeBanner";
import ModalCtx, {ModalContext} from "../store/modalContext";
import { CrudContext } from "../store/crudContext";
import { TaskOptionContextProvider } from "../store/taskOptionsContext";
import OpenAddTaskModalBtn from "./modal/openAddTaskModalBtn";
import Modal from "./modal/modal";
import { useContext } from "react";

export default function PageWrapper() {
  const modalContext = useContext(ModalCtx);

  return (
    <TaskOptionContextProvider>
      <ModalContext>
        <CrudContext>
          <div
            className={`w-full h-screen bg-slate-50 relative flex flex-col items-center justify-between px-6 py-6 ${
              modalContext.isModalOpened || modalContext.isEditModalOpened
                ? "overflow-hidden"
                : "overflow-scroll"
            }`}
          >
            {createPortal(<Modal />, document.getElementById("modal-overlay"))}
            <div className="w-full flex flex-col">
              <HeadToolbarWrapper />
              <WelcomBanner />
              <TaskWrapper />
              <OpenAddTaskModalBtn />
            </div>
          </div>
        </CrudContext>
      </ModalContext>
    </TaskOptionContextProvider>
  );
}
