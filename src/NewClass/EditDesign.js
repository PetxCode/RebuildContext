import { Button } from "antd";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "./ContextFile/GlobalContext";

const AddDesign = (props) => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const { users, editUser } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const currentID = props.match.params.id;
  React.useEffect(() => {
    const userID = currentID;
    const selectedUser = users.find((user) => user.id === userID);
    setSelectedUser(selectedUser);
  }, [users, currentID]);

  const onEdited = () => {
    editUser(selectedUser);
    history.push("/newHome");
  };

  return (
    <div
      style={{
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          marginBottom: "90px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "400px",
            marginBottom: "20px",
            padding: "5px 20px",
          }}
          placeholder="Edit User"
          // value={selectedUser.input}
          // value={selectedUser.name}
          name="name"
          onChange={(e) => {
            setSelectedUser({
              ...selectedUser,
              [e.target.name]: e.target.value,
            });
          }}
          value={selectedUser.name}
        />
        <div>
          <Button
            style={{
              width: "100px",
              backgroundColor: "green",
              color: "white",
              marginRight: "10px",
            }}
            onClick={() => {
              onEdited();
            }}
          >
            Edit
          </Button>
          <Button
            style={{
              // width: "80px",
              backgroundColor: "red",
              color: "white",
              // marginRight: "10px",
            }}
            onClick={() => {
              history.push("/newHome");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddDesign;
