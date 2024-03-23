import { createPortal } from "react-dom";
import AddTaskBtn from "./components/addTask/addTaskButton";
import AddTaskModal from "./components/addTask/addTaskModal/addTaskModal";
import HeadToolbarWrapper from "./components/head toolbar/headToolbarWrapper";
import PageWrapper from "./components/pageWrapper";
import TaskWrapper from "./components/tasks/tasksWrapper";
import WelcomBanner from "./components/welcome banner/welcomeBanner";
import { ModalContext } from "./store/modalContext";
import { CrudCtxProvider } from "./store/crudContext";

function App() {
  return (
    <>
      <PageWrapper>
        <div className="w-full">
          <HeadToolbarWrapper />
          <WelcomBanner />
          <CrudCtxProvider>
            <TaskWrapper />
          </CrudCtxProvider>
        </div>
        <CrudCtxProvider>
          <ModalContext>
            <AddTaskBtn />
            {createPortal(
              <AddTaskModal />,
              document.getElementById("modal-overlay")
            )}
          </ModalContext>
        </CrudCtxProvider>
      </PageWrapper>
    </>
  );
}

export default App;
