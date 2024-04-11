import { createContext } from "react";
import { useState } from "react";

const ModalCtx = createContext({
  isModalOpened: false,
  handleModal: () => {},
  isEditModalOpened: false,
  handleEditModal: () => {}
});

export function ModalContext(props) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);

  const handleModal = () => {
    setIsModalOpened((prev) => !prev);
  };

  const handleEditModal = () => {
    setIsEditModalOpened((prev) => !prev);
  };

  return (
    <ModalCtx.Provider
      value={{
        isModalOpened,
        handleModal,
        isEditModalOpened,
        handleEditModal,
      }}
    >
      {props.children}
    </ModalCtx.Provider>
  );
}

export default ModalCtx;
