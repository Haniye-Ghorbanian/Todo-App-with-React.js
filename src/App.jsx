import { ModalContext } from "./store/modalContext";
import { TaskOptionContextProvider } from "./store/taskOptionsContext";
import { CrudContext } from "./store/crudContext";
import PageWrapper from "./components/pageWrapper";


function App() {
  return (
    <ModalContext>
      <TaskOptionContextProvider>
        <CrudContext>
          <PageWrapper></PageWrapper>
        </CrudContext>
      </TaskOptionContextProvider>
    </ModalContext>
  );
}

export default App;
