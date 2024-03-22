import AddTaskBtn from "./components/addTask/addTaskButton";
import AddTaskModal from "./components/addTask/addTaskModal/addTaskModal";
import HeadToolbarWrapper from "./components/head toolbar/headToolbarWrapper";
import PageWrapper from "./components/pageWrapper";
import TaskWrapper from "./components/tasks/tasksWrapper";
import WelcomBanner from "./components/welcome banner/welcomeBanner";
import ModalCtx, { ModalContext } from "./store/modalContext";
import { useState } from "react";

function App() {
  
  return (
    <>
      <PageWrapper>
        <div className="w-full">
          <HeadToolbarWrapper />
          <WelcomBanner />
          <TaskWrapper />
        </div>
        <ModalContext>
          <AddTaskBtn />
          <AddTaskModal />
        </ModalContext>
      </PageWrapper>
    </>
  );
}

export default App;
