import { Outlet } from "react-router-dom";
import HeadToolbarWrapper from "../head toolbar/headToolbarWrapper";
import { useContext } from "react";
import ModalCtx from "../../store/modalContext";
import Menu from "../head toolbar/menu/menu";

export default function Layout() {


  const menuCtx = useContext(ModalCtx);

    return (
        <>
            <HeadToolbarWrapper />
            {menuCtx.isMenuOpened && <Menu />}
            <Outlet />
        </>
    )
}