import MenuIcon from "./menu/menuIcon";
import SearchIcon from "./searchIcon";

export default function HeadToolbarWrapper() {
  return (
    <div className="w-full h-16 flex items-center justify-between py-3 mb-4">
      <MenuIcon />
      <SearchIcon />
    </div>
  );
}
