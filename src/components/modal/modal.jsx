import { useContext, useEffect, useRef } from "react";
import ModalCtx from "../../store/modalContext";
import ModalInputs from "../modal/modalInputs/modalInputs";
import ModalButtons from "../modal/modalButtons/modalButtons";
import { useLocation } from "react-router-dom";
import HabitSettingsContainer from "../habit tracker page/habit settings/habitSettingsContainer";

export default function Modal() {
  const location = useLocation();
  const currentPath = location.pathname;
  const ctx = useContext(ModalCtx);
  const modalRef = useRef(null)

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       modalRef.current &&
  //       !modalRef.current.contains(event.target) &&
  //       ctx.isModalOpened
  //     ) {
  //       ctx.handleModal();
  //       console.log("l")
  //     } else if (
  //       modalRef.current &&
  //       !modalRef.current.contains(event.target) &&
  //       ctx.isEditModalOpened
  //     ) {
  //       ctx.handleEditModal();
  //       console.log("l")
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [ctx.isEditModalOpened, ctx.isModalOpened, modalRef]);

  return (
    <>
      {currentPath === "/habit-tracker" &&
        (ctx.isModalOpened || ctx.isEditModalOpened) && (
          <div
            className="w-full h-screen absolute top-0 z-20 flex items-center justify-center backdrop-blur-sm"
            ref={modalRef}
          >
            <div
              className={`w-4/5 h-2/3 flex flex-col items-start justify-between bg-white shadow-lg  px-5 py-16 pb-6 rounded-lg ${
                ctx.isModalOpened || ctx.isEditModalOpened
                  ? "animate-slideBottom"
                  : ""
              }`}
            >
              <h3 className="font-extrabold text-2xl text-slate-700">
                {ctx.isModalOpened ? "Add Habit" : "Edit Habit"}
              </h3>
              <HabitSettingsContainer />
              <ModalButtons />
            </div>
          </div>
        )}
      {currentPath === "/todo" &&
        (ctx.isModalOpened || ctx.isEditModalOpened) && (
          <div className="w-full h-screen absolute top-0 z-20 flex items-center justify-center backdrop-blur-sm" >
            <div className="w-4/5 h-3/5 flex flex-col items-start justify-between bg-white shadow-lg px-10 py-16 rounded-lg">
              <h3 className="font-extrabold text-2xl text-slate-700">
                {ctx.isModalOpened ? "Add Task" : "Edit Task"}
              </h3>
              <ModalInputs />
              <ModalButtons />
            </div>
          </div>
        )}
    </>
  );
}
