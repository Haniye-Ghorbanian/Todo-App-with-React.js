import { createContext } from "react";
import { useState } from "react";

const ModalCtx = createContext({
  isModalOpened: false,
  handleModal: () => {},
  isEditModalOpened: false,
  handleEditModal: () => {},
  isMenuOpened: false,
  handleMenu: () => {},
});

export function ModalContext(props) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);
  const [isMenuOpened, setIsMenuOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpened((prev) => !prev);
  };

  const handleEditModal = () => {
    setIsEditModalOpened((prev) => !prev);
  };

  const handleMenu = () => {
    
    isMenuOpened ? setTimeout(() => {
      setIsMenuOpen((prev) => !prev)
    }, 500) : setIsMenuOpen((prev) => !prev)
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
      }}
    >
      {props.children}
    </ModalCtx.Provider>
  );
}

export default ModalCtx;
