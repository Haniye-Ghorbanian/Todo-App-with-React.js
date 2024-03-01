import HeadToolbarWrapper from "./components/head toolbar/headToolbarWrapper";
import PageWrapper from "./components/pageWrapper";
import TaskWrapper from "./components/tasks/tasksWrapper";
import WelcomBanner from "./components/welcome banner/welcomeBanner";

function App() {
  return (
    <>
      <PageWrapper>
        <HeadToolbarWrapper />
        <WelcomBanner />
        <TaskWrapper />
      </PageWrapper>
    </>
  );
}

export default App;
