import React, { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { AppReducer } from "./AppReducer";

const initState = {
  users: [
    { id: uuid(), name: "Peter" },
    { id: uuid(), name: "Bukky" },
    { id: uuid(), name: "Ndidi" },
    { id: uuid(), name: "Ubani" },
    { id: uuid(), name: "Grace" },
    { id: uuid(), name: "Joshua" },
  ],
};

export const AppContext = createContext(initState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  //Action for Removal
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  return (
    <AppContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
