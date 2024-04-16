import { useCallback, useContext, useEffect, useRef, useMemo } from "react";
import MenuHeader from "./menu header/menuHeaderContainer";
import MenuOptions from "./menu options/menuOptionsContainer";
import ModalCtx from "../../../store/modalContext";

export default function Menu() {
  const menuRef = useRef(null);
  const menuCtx = useContext(ModalCtx);

  useMemo(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuCtx.isMenuOpened
      ) {
        menuCtx.handleMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuCtx.isMenuOpened]);

  return (
    menuCtx.isMenuOpened && (
      <div
        className="w-4/6 h-screen bg-blue-700 fixed top-0 left-0 z-20 pt-24 pl-10 flex flex-col space-y-12 shadow-lg"
        ref={menuRef}
      >
        <MenuHeader />
        <MenuOptions />
      </div>
    )
  );
}
