import { createContext } from "react";
import { useReducer } from "react";

const crudCtx = createContext({
  tasks: [],
  task: {},
  handleTasks: () => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }

    case "SET_TASK": {
      return {
        ...state,
        task: { title: action.payload.title },
      };
    }

    case "DELETE_TASK": {
      return {

      }
    }
  }
}

export function CrudCtxProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    task: { id: null, title: "", desc: "", isDone: false }
  });

  return (
    <crudCtx.Provider
      value={{ tasks: state.tasks, handleTasks: dispatch, task: state.task }}
    >
      {props.children}
    </crudCtx.Provider>
  );
}

export default crudCtx;
