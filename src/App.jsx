import AddTaskBtn from "./components/addTask/Buttons";
import AddTaskPanel from "./components/addTask/addTaskModal";
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
          <AddTaskPanel />
        </PageWrapper>
      </div>
    </>
  );
}

export default App;
