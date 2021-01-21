import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";
const Feed = () => {
  return (
    <div>
      <Header>
        <Button>
          <Link to="/">Start</Link>
        </Button>
      </Header>
      The Feed
    </div>
  );
};

export default Feed;
