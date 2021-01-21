import React, { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";
import { v4 as uuid } from "uuid";

const newState = {
  users: [
    { id: uuid(), name: "Peter" },
    { id: uuid(), name: "Bukky" },
    { id: uuid(), name: "Yemisi" },
    { id: uuid(), name: "Ndidi" },
    { id: uuid(), name: "Ubani" },
    { id: uuid(), name: "Anthony" },
    { id: uuid(), name: "Grace" },
    { id: uuid(), name: "Gbenga" },
    { id: uuid(), name: "Ola" },
    { id: uuid(), name: "Osas" },
    { id: uuid(), name: "Big Sam" },
  ],
};

export const GlobalContext = createContext(newState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, newState);

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
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
