import React, { useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer";

const initState = {
  users: [{ id: 1, name: "Peter" }],
};

export const AppContext = createContext(initState);

export const AppProvider = ({ childern }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  return (
    <AppContext.Provider
      value={{
        users: state.users,
      }}
    >
      {childern}
    </AppContext.Provider>
  );
};
