import { ModalContext } from "./modalContext";
import { CrudContext } from "./crudContext";
import { TaskOptionContextProvider } from "./taskOptionsContext";

export default function AllContextsWrapper({ Children }) {
  return (
    <>
      <TaskOptionContextProvider>
        <ModalContext>
          <CrudContext>{Children}</CrudContext>
        </ModalContext>
      </TaskOptionContextProvider>
    </>
  );
}
