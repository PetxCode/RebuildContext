import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./ContextFile/GlobalContext";

const HomeDesign = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div
      style={{
        fontFamily: "Poppins",
      }}
    >
      <Header
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "white",
        }}
      >
        <div>Home for Adding New User</div>
        <Button>
          <Link to="/adding">Add user </Link>{" "}
        </Button>
      </Header>
      <div
        style={{
          marginTop: "50px",
        }}
      >
        {}
      </div>
      {users.map(({ id, name }) => (
        <div
          key={id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 40px",
            border: "1px solid lightgray",
            margin: "0 90px",
            alignItems: "center",
          }}
        >
          <div> {name} </div>
          <div>
            <Button
              style={{
                width: "100px",
                backgroundColor: "green",
                color: "white",
                marginRight: "10px",
              }}
            >
              <Link to={`/editing/${id}`}>Edit</Link>
            </Button>
            <Button
              style={{
                // width: "80px",
                backgroundColor: "red",
                color: "white",
                // marginRight: "10px",
              }}
              onClick={() => {
                removeUser(id);
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeDesign;
