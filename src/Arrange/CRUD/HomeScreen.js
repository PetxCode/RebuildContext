import { Button } from "antd";
import React, { createContext, useContext } from "react";
// import ViewHeader from "../ContextFile/ViewHeader";
import { Link } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";
import { AppContext } from "../ContextAPI/TheContext";

const HomeScreen = () => {
  const { users, removeUser } = useContext(AppContext);
  return (
    <div
      style={{
        fontFamily: "Poppins",
      }}
    >
      <Header>
        <Button>
          <Link to="/add">Add New User</Link>
        </Button>
      </Header>

      <div
        style={{
          marginBottom: "30px",
        }}
      ></div>
      {users.map(({ id, name }) => (
        <div
          key={id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
            height: "50px",
            width: "80%",
            alignItems: "center",
            border: "1px solid lightblue",
            margin: "auto",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <div>{name}</div>
          <div>
            <Button
              style={{
                marginRight: "10px",
                backgroundColor: "yellow",
                fontWeight: "bold",
              }}
            >
              <Link to={`/edit/${id}`}>Edit</Link>
            </Button>
            <Button
              style={{
                backgroundColor: "red",
                fontWeight: "bold",
                color: "white",
              }}
              onClick={() => {
                removeUser();
                console.log(id);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
