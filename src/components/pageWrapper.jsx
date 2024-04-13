import { createPortal } from "react-dom";
import HeadToolbarWrapper from "./head toolbar/headToolbarWrapper"
import TaskWrapper from "./tasks/tasksWrapper";
import WelcomBanner from "./welcome banner/welcomeBanner";
import { ModalContext } from "../store/modalContext";
import { CrudContext } from "../store/crudContext";
import { TaskOptionContextProvider } from "../store/taskOptionsContext";
import OpenAddTaskModalBtn from "./modal/openAddTaskModalBtn";
import Modal from "./modal/modal";


export default function PageWrapper() {
  return (
    <TaskOptionContextProvider>
      <ModalContext>
        <CrudContext>
          <div className="w-full h-screen bg-slate-50 relative flex flex-col items-center justify-between px-6 py-6">
            {createPortal(<Modal />, document.getElementById("modal-overlay"))}
            <div className="w-full">
              <HeadToolbarWrapper />
              <WelcomBanner />
              <TaskWrapper />
            </div>
            <OpenAddTaskModalBtn />
          </div>
        </CrudContext>
      </ModalContext>
    </TaskOptionContextProvider>
  );
}
