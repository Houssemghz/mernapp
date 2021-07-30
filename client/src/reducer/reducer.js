const initialState = { users: [], loading: false };
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "getusersproc":
    case "addusersproc":
    case "updusersproc":
    case "delusersproc":
      return { ...state, loading: true };
    case "getuserssuc":
      return { users: payload, loading: false };
    case "getusersfail":
    case "addusersfail":
    case "updusersfail":
    case "delusersfail":
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default reducer;
