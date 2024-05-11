import { useContext } from "react";
import crudCtx from "../../../store/crudContext";
import ModalCtx from "../../../store/modalContext";
import { habitTrackerContext } from "../../../store/habitTrackerContext";
import { useLocation } from "react-router-dom";

export default function Add() {
  const ctx = useContext(crudCtx);
  const modalCtx = useContext(ModalCtx);
  const habitCtx = useContext(habitTrackerContext);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleAddTaskBtn = () => {
    modalCtx.isModalOpened
      ? (ctx.addTask(), modalCtx.handleModal())
      : (ctx.handleEditTask(), modalCtx.handleEditModal());
  };

  const handleAddHabitBtn = () => {
    modalCtx.isModalOpened
      ? (habitCtx.setHabits((prevHabits) => [
          ...prevHabits,
          habitCtx.singleHabit,
        ]),
        modalCtx.handleModal())
      : "";
  };

  const handleBtn = () => {
    switch (currentPath) {
      case "/todo":
        handleAddTaskBtn();
      case "/habit-tracker":
        handleAddHabitBtn();
    }
  };

  return (
    <button
      className="font-semibold text-md text-white bg-blue-600 px-5 py-2 rounded-md"
      onClick={handleBtn}
    >
      {modalCtx.isModalOpened ? "Add" : "Edit"}
    </button>
  );
}
