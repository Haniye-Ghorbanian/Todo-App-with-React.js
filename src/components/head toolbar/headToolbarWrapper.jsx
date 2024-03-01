import Menu from "./menu";
import Search from "./search";

export default function HeadToolbarWrapper() {
  return (
    <div className="w-full h-16 flex items-center justify-between py-3 mb-4">
      <Menu />
      <Search />
    </div>
  );
}
