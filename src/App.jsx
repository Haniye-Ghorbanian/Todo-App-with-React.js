import { createPortal } from "react-dom";
import AddTaskBtn from "./components/addTask/addTaskButton";
import AddTaskModal from "./components/addTask/addTaskModal/addTaskModal";
import HeadToolbarWrapper from "./components/head toolbar/headToolbarWrapper";
import PageWrapper from "./components/pageWrapper";
import TaskWrapper from "./components/tasks/tasksWrapper";
import WelcomBanner from "./components/welcome banner/welcomeBanner";
import { ModalContext } from "./store/modalContext";
import { CrudCtxProvider } from "./store/crudContext";
import { TaskOptionContextProvider } from "./store/taskOptionsContext";

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

              <AddTaskBtn />
              {createPortal(
                <AddTaskModal />,
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
