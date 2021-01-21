import { Button } from "antd";
import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../ContextAPI/TheContext";

const EditScreen = (props) => {
  const history = useHistory();
  const { editUser, users } = useContext(AppContext);
  const [name, setName] = React.useState({});
  const [selectedUser, setSeletedUser] = useState({
    id: " ",
    name: " ",
  });
  const currentID = props.match.params.id;
  console.log(currentID);
  useEffect(() => {
    const userID = currentID;
    const selectedUser = users.find((user) => user.id === userID);

    setSeletedUser(selectedUser);
  }, [currentID, users]);

  const finallyEdit = () => {
    editUser(selectedUser);
    history.push("/home");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
        fontFamily: "Poppins",
      }}
    >
      <div>
        <input
          style={{
            width: "400px",
            marginBottom: "10px",
          }}
          name="name"
          value={selectedUser.name}
          onChange={(e) => {
            setSeletedUser({
              ...selectedUser,
              [e.target.name]: e.target.value,
            });
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
            finallyEdit();
          }}
        >
          Submit
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
          Cancel
        </Button>
      </div>
      <div>Hello</div>
      <div>Good</div>
    </div>
  );
};

export default EditScreen;
