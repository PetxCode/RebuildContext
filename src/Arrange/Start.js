import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const initState = {
  counter: 0,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "A":
      return {
        counter: state.counter + 1,
      };

    case "B":
      return {
        counter: state.counter - 1,
      };

    case "C":
      return {
        counter: action.payload,
      };

    default:
      return state;
  }
};

const Start = () => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  const [input, setInput] = React.useState(0);
  return (
    <div>
      <Header>
        <Button>
          <Link to="/feed">New Feed</Link>
        </Button>
      </Header>

      <input
        type="Number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          dispatch({
            type: "C",
            payload: input,
          });
        }}
      >
        init Count
      </Button>

      <div>{state.counter}</div>

      <Button
        onClick={() => {
          dispatch({
            type: "B",
          });
        }}
      >
        Remove
      </Button>
      <Button
        onClick={() => {
          dispatch({
            type: "A",
          });
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default Start;
