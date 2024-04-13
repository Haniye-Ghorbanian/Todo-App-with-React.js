import { createPortal } from "react-dom";
import HeadToolbarWrapper from "./components/head toolbar/headToolbarWrapper";
import PageWrapper from "./components/pageWrapper";
import TaskWrapper from "./components/tasks/tasksWrapper";
import WelcomBanner from "./components/welcome banner/welcomeBanner";
import { ModalContext } from "./store/modalContext";
import { CrudCtxProvider } from "./store/crudContext";
import { TaskOptionContextProvider } from "./store/taskOptionsContext";
import OpenAddTaskModalBtn from "./components/addTask/openAddTaskModalBtn";
import Modal from "./components/addTask/addTaskModal/modal";

function App() {

  
  return (
    <>
      <TaskOptionContextProvider>
        <ModalContext>
          <PageWrapper>
            <CrudCtxProvider>
              <div className="w-full">
                <HeadToolbarWrapper />
                <WelcomBanner />
                <TaskWrapper/>
              </div>

              <OpenAddTaskModalBtn />
              {createPortal(
                <Modal />,
                document.getElementById("modal-overlay")
              )}
            </CrudCtxProvider>
          </PageWrapper>
        </ModalContext>
      </TaskOptionContextProvider>
    </>
  );
}

export default App;
