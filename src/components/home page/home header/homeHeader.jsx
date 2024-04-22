import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <header className="w-full h-24 fixed top-0 right-0 px-6 py-3 shadow-md flex items-center">
      <nav className="w-full">
        <ul className="w-full flex flex-row-reverse justify-between items-center">
          <div className="w-3/5 flex justify-end items-center">
            <span className=" bg-blue-500 px-6 py-3 rounded-xl">
              <Link className=" text-slate-50 font-semibold text-lg" to="/sign-in">sign in / up</Link>
            </span>
          </div>

          <div>
            <span>Logo</span>
          </div>
        </ul>
      </nav>
    </header>
  );
}
