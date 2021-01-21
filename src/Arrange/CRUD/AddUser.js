import { Button } from "antd";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../ContextAPI/TheContext";
import { v4 as uuid } from "uuid";

const AddScreen = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const { user, addUser } = useContext(AppContext);

  const addNewUser = () => {
    const newUser = {
      id: uuid(),
      name: name,
    };
    addUser(newUser);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Poppins",
        marginTop: "40px",
      }}
    >
      <div>
        <input
          style={{
            width: "400px",
            marginBottom: "10px",
            padding: "5px 20px",
          }}
          placeholder="Enter user's name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <Button
          style={{
            marginRight: "10px",
            backgroundColor: "yellow",
          }}
          onClick={() => {
            addNewUser();
            history.push("/home");
          }}
        >
          Add User
        </Button>
        <Button
          style={{
            marginRight: "10px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => {
            history.push("/home");
          }}
        >
          Cancel Task
        </Button>
      </div>
    </div>
  );
};

export default AddScreen;
