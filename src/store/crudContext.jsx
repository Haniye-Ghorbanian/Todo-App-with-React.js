import { createContext, useContext } from "react";
import { useReducer } from "react";
import ModalCtx from "./modalContext";

const crudCtx = createContext({
  tasks: [],
  task: {},
  handleTasks: () => {},
  fetchData: () => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "SET_TASK": {
      return {
        ...state,
        tasks: action.payload,
      };
    }

    case "ADD_TASK": {
      return {
        ...state,
        task: {
          title: action.payload.title,
          description: action.payload.description,
          is_done: action.payload.is_done,
        },
      };
    }

    case "HANDLE_DONE": {
      return {
        ...state,
        task: {
          ...state.task,
          is_done: action.payload,
        },
      };
    }
  }
}

export function CrudCtxProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    task: { title: "", description: "", is_done: false },
  });

  const modalCtx = useContext(ModalCtx);
  // console.log(modalCtx);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/todos/");
    const result = await response.json();
    dispatch({ type: "SET_TASK", payload: result });
    // console.log(result);
  };
  
  const addTask = async () => {
    debugger
    try {
      await fetch("http://127.0.0.1:8000/api/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.task),
      });

      dispatch({
        type: "ADD_TASK",
        payload: { title: "", description: "", is_done: false },
      });

      console.log(state.task)

      fetchData(); 

    } catch (error) {
      console.log(`the post error: ${error}`);
    }
  };

  return (
    <crudCtx.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        handleTasks: dispatch,
        fetchData,
        addTask,
      }}
    >
      {props.children}
    </crudCtx.Provider>
  );
}

export default crudCtx;
