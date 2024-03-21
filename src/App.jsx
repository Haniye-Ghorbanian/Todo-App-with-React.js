import AddTaskBtn from "./components/addTask/addTaskButton";
import AddTaskModal from "./components/addTask/addTaskModal/addTaskModal";
import HeadToolbarWrapper from "./components/head toolbar/headToolbarWrapper";
import PageWrapper from "./components/pageWrapper";
import TaskWrapper from "./components/tasks/tasksWrapper";
import WelcomBanner from "./components/welcome banner/welcomeBanner";

function App() {
  return (
    <>
      <div>
        <PageWrapper>
          <div className="w-full">
            <HeadToolbarWrapper />
            <WelcomBanner />
            <TaskWrapper />
          </div>
          <AddTaskBtn />
          <AddTaskModal />
        </PageWrapper>
      </div>
    </>
  );
}

export default App;
