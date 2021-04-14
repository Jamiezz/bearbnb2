const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});


export const restoreUser = () => async (dispatch) => {
    const response = await fetch("/api/auth/");
    const data = await response.json();
    dispatch(setUser(data));
    return response;
  };

  const initialState = { user: null };

  const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case SET_USER:
        newState = Object.assign({}, state);
        newState.user = action.user;
        return newState;
      case REMOVE_USER:
        return initialState;
      default:
        return state;
    }
  };

  export default userReducer;
