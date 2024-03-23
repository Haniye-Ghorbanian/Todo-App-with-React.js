import React, { useState } from "react";
import "./hamburgerBar.css";

const HamburgerBars = () => {
  const [animationActive, setAnimationActive] = useState(false);

  const toggleAnimation = () => {
    setAnimationActive(!animationActive);
  };

  return (
    <div
      className={` cross menu--1 ${animationActive ? "active" : ""}`}
      onClick={toggleAnimation}
    >
      <label className="block w-14 aspect-square">
        <input className="hidden" type="checkbox" />
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path className="line--1 stroke-slate-500 stroke-3 fill-none" d="M0 40h62c13 0 6 28-4 18L35 35" />
          <path className="line--2 stroke-slate-500 stroke-3 fill-none" d="M0 50h70" />
          <path className="line--3 stroke-slate-500 stroke-3 fill-none" d="M0 60h62c13 0 6-28-4-18L35 65" />
        </svg>
      </label>
    </div>
  );
};

export default HamburgerBars;
