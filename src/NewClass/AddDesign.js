import { Button, Input } from "antd";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "./ContextFile/GlobalContext";

const AddDesign = () => {
  const history = useHistory();
  const { users, addUser } = useContext(GlobalContext);
  const [name, setName] = useState("");

  const addNewUser = () => {
    const newUser = {
      id: uuid(),
      name: name,
    };
    addUser(newUser);
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
          placeholder="Add User"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
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
              addNewUser();
            }}
          >
            Add User
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
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddDesign;
