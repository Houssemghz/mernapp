import axios from "axios";
export const getusers = () => async (dispatch) => {
  try {
    dispatch({ type: "getusersproc" });
    const res = await axios.get("http://localhost:4000/api/users");
    console.log(res.data);
    dispatch({ type: "getuserssuc", payload: res.data });
  } catch (error) {
    dispatch({ type: "getusersfail" });
    console.log("failed to ritrive data", error);
  }
};
export const addusers = (name) => async (dispatch) => {
  try {
    dispatch({ type: "addusersproc" });
    await axios.post("http://localhost:4000/api/users", { name });
    dispatch(getusers());
  } catch (error) {
    dispatch({ type: "addusersfail" });
  }
};
export const updateusers = (id, newuser) => async (dispatch) => {
  try {
    dispatch({ type: "updusersproc" });
    await axios.put(`http://localhost:4000/api/users/${id}`, { name: newuser });
    dispatch(getusers());
  } catch (error) {
    dispatch({ type: "updusersfail" });
  }
};
export const delusers = (id) => async (dispatch) => {
  try {
    dispatch({ type: "delusersproc" });
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    dispatch(getusers());
  } catch (error) {
    dispatch({ type: "delusersfail" });
  }
};
