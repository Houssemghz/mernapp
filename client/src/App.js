import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Jumbotron, Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getusers, addusers, delusers } from "./actions/index.js";
import Updateuser from "./Components/Updateuser";
function App() {
  const users = useSelector((state) => state.reducer.users);
  const loading = useSelector((state) => state.reducer.loading);
  const dispatch = useDispatch();
  const [newuser, setNewuser] = useState("");
  const adduser = () => {
    if (newuser.trim()) {
      dispatch(addusers(newuser));
      setNewuser("");
    }
  };
  const deleteusers = (id) => {
    dispatch(delusers(id));
  };
  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Hello Users</h1>
      <div>
        <input
          type="text"
          placeholder="add new user"
          value={newuser}
          onChange={(e) => setNewuser(e.target.value)}
        />
        <Button variant="primary" onClick={adduser}>
          add
        </Button>
      </div>
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        users.map((user) => {
          return (
            <div className="container" key={user._id}>
              <Jumbotron className="jumb">
                <h6>User Description</h6>
                <div className="user">
                  <span>{user.name}</span>
                  <div className="button">
                    <Button
                      variant="danger"
                      className="del"
                      onClick={() => deleteusers(user._id)}
                    >
                      Delete
                    </Button>
                    <Updateuser name={user.name} id={user._id} />
                  </div>
                </div>
              </Jumbotron>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
