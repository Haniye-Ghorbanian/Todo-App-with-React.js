import { createContext } from "react";
import { useState } from "react";

const ModalCtx = createContext({
  isModalOpened: false,
  handleModal: () => {},
});

export function ModalContext(props) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleModal = () => {
    setIsModalOpened((prev) => !prev);
  };

  return (
    <ModalCtx.Provider
      value={{
        isModalOpened,
        handleModal,
      }}
    >
      {props.children}
    </ModalCtx.Provider>
  );
}

export default ModalCtx;
