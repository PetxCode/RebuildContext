export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };

    case "ADD_USER":
      return {
        users: [action.payload, ...state.users],
      };

    case "EDIT_USER":
      const updatedSelection = action.payload;
      const selection = state.users.map((user) => {
        if (user.id === updatedSelection.id) {
          return updatedSelection;
        }
        return user;
      });

      return {
        users: selection,
      };

    default:
      return state;
  }
};
