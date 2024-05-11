import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useHref, useMatch, useNavigate } from "react-router-dom";
import MenuHeader from "./menu header/menuHeaderContainer";
import MenuOptions from "./menu options/menuOptionsContainer";
import ModalCtx from "../../../store/modalContext";

export default function Menu() {
  const menuRef = useRef(null);
  const menuCtx = useContext(ModalCtx);
  const location = useLocation();
  const [previousRoute, setPreviousRoute] = useState(null);

  useEffect(() => {
    setPreviousRoute(location.pathname);
    previousRoute !== null && previousRoute !== location.pathname
      ? menuCtx.handleMenu()
      : "";

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
  }, [menuCtx.isMenuOpened, location.pathname]);

  return (
    <div
      className={`w-4/6 h-screen bg-blue-700 fixed top-0 z-20 pt-24 pl-10 flex flex-col space-y-12 ${
        menuCtx.isMenuOpened && "animate-slideOpen"
      } ${!menuCtx.isMenuOpened && "animate-slideClose"}`}
      ref={menuRef}
    >
      <MenuHeader />
      <MenuOptions />
    </div>
  );
}
