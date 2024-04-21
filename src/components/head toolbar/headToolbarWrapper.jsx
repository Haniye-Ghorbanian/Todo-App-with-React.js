import { useContext } from "react";
import MenuIcon from "./menu/menuIcon";
import SearchIcon from "./searchIcon";
import ModalCtx from "../../store/modalContext";

export default function HeadToolbarWrapper() {
  const menuCtx = useContext(ModalCtx);

  return (
    <header>
      <nav>
        <ul
          className={`w-full h-16 flex items-center justify-between px-6 pt-6 fixed top-0 mb-4 transition-all duration-300 delay-75 ${
            menuCtx.isMenuOpened ? "blur-sm ml-24" : ""
          }`}
        >
          <MenuIcon />
          <SearchIcon />
        </ul>
      </nav>
    </header>
  );
}
