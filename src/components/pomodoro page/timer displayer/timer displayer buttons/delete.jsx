import { useContext, useState } from "react";
import timerContext from "../../../../store/timerContext";

export default function DeleteTimer() {

    const timerCtx= useContext(timerContext)

    const handleDeleteTimer = () => {
        timerCtx.setIsTimerDeleted(true)
        timerCtx.setIsSettingSaved(false)
        timerCtx.setIsTimerSettingOpen(false)
        timerCtx.setIsEditClicked(false)
        timerCtx.setPhase("focus")
    }

  return (
    <button className="border border-red-400 rounded-full p-4" onClick={handleDeleteTimer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#767575"
        width="30px"
        height="30px"
        viewBox="-2.94 0 31.716 31.716"
      >
        <g transform="translate(-355.957 -579)">
          <path d="M376.515,610.716H361.231a2.361,2.361,0,0,1-2.358-2.359V584.1a1,1,0,0,1,2,0v24.255a.36.36,0,0,0,.358.359h15.284a.36.36,0,0,0,.358-.359V584.1a1,1,0,0,1,2,0v24.255A2.361,2.361,0,0,1,376.515,610.716Z" />

          <path d="M365.457,604.917a1,1,0,0,1-1-1v-14a1,1,0,0,1,2,0v14A1,1,0,0,1,365.457,604.917Z" />

          <path d="M372.29,604.917a1,1,0,0,1-1-1v-14a1,1,0,0,1,2,0v14A1,1,0,0,1,372.29,604.917Z" />

          <path d="M380.79,585.1H356.957a1,1,0,0,1,0-2H380.79a1,1,0,0,1,0,2Z" />

          <path d="M372.79,581h-7.917a1,1,0,1,1,0-2h7.917a1,1,0,0,1,0,2Z" />
        </g>
      </svg>
    </button>
  );
}
