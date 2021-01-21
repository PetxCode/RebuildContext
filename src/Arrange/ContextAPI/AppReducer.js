export const AppReducer = (state, action) => {
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
      const update = action.payload;
      const updatedUser = state.users.map((user) => {
        if (user.id === update.id) {
          return update;
        }
        return user;
      });

      return {
        users: updatedUser,
      };

    default:
      return state;
  }
};
