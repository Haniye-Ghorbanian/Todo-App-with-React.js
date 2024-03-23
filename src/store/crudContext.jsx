import { createContext } from "react";
import { useReducer } from "react";

const crudCtx = createContext({
  tasks: [],
  handleTasks: () => {},
  addTask: () => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const newTitle = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, newTitle],
      };
    }
  }
}

export function CrudCtxProvider(props) {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });

  const addTask = () => {
    dispatch({ type: "ADD_TASK", payload: ctx.taskTitleRef.value });
  };
  return (
    <crudCtx.Provider
      value={{ tasks: state.tasks, handleTasks: dispatch, addTask }}
    >
      {props.children}
    </crudCtx.Provider>
  );
}

export default crudCtx;
