import { createContext } from "react";
import { useReducer } from "react";

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
          isDone: action.payload.isDone,
        },
      };
    }
  }
}

export function CrudCtxProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    task: {  title: "", description: "", isDone: false },
  });

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/todos/");
    const result = await response.json();
    dispatch({ type: "SET_TASK", payload: result });
    // console.log(result);
  };

  return (
    <crudCtx.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        handleTasks: dispatch,
        fetchData: fetchData,
      }}
    >
      {props.children}
    </crudCtx.Provider>
  );
}

export default crudCtx;
