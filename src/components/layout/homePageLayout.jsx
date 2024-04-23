import { Outlet } from "react-router-dom";
import HomeHeader from "../home page/home header/homeHeader";

export default function HomePageLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
}
