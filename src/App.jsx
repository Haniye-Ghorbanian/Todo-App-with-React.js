import { ModalContext } from "./store/modalContext";
import { CrudContext } from "./store/crudContext";
import PageWrapper from "./components/pageWrapper";


function App() {
  return (
    <ModalContext>
        <CrudContext>
          <PageWrapper></PageWrapper>
        </CrudContext>
    </ModalContext>
  );
}

export default App;
