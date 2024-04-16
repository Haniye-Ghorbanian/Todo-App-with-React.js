import { createContext } from "react";
import { useState, useRef} from "react";

const ModalCtx = createContext({
  isModalOpened: false,
  handleModal: () => {},
  isEditModalOpened: false,
  handleEditModal: () => {},
  isMenuOpened: false,
  handleMenu: () => {},
  todoPageRef: null,
});

export function ModalContext(props) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);
  const [isMenuOpened, setIsMenuOpen] = useState(false);
  const todoPageRef = useRef(null)

  const handleModal = () => {
    setIsModalOpened((prev) => !prev);
  };

  const handleEditModal = () => {
    setIsEditModalOpened((prev) => !prev);
  };

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <ModalCtx.Provider
      value={{
        isModalOpened,
        handleModal,
        isEditModalOpened,
        handleEditModal,
        isMenuOpened,
        handleMenu,
        todoPageRef,
      }}
    >
      {props.children}
    </ModalCtx.Provider>
  );
}

export default ModalCtx;
