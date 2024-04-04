import React, { useContext, useMemo } from "react";
import "./hamburgerBar.css";
import taskOptionsContext from "../../../../store/taskOptionsContext";

const HamburgerBars = ({ id }) => {
  const ctx = useContext(taskOptionsContext);

  const handler = () => {
    debugger;
    e.stopPropagation();
    ctx.setIsBarClicked((prev) => !prev);
  };

  // const handler = useMemo(() => {
  //   return (e) => {};
  // }, [ctx.setIsBarClicked]);

  return (
    <div className="cross menu--1">
      <label className="block w-14 aspect-square" htmlFor={`h-${id}`}>
        <input className="hidden" type="checkbox" id={`h-${id}`} />
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handler}
        >
          <path
            className="barPath line--1 stroke-slate-500 stroke-3 fill-none"
            d="M0 40h62c13 0 6 28-4 18L35 35"
          />
          <path
            className="line--2 stroke-slate-500 stroke-3 fill-none"
            d="M0 50h70"
          />
          <path
            className="line--3 stroke-slate-500 stroke-3 fill-none"
            d="M0 60h62c13 0 6-28-4-18L35 65"
          />
        </svg>
      </label>
    </div>
  );
};

export default HamburgerBars;
