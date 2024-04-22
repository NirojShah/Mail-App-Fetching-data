import React from "react";
import { Link } from "react-router-dom";
import Alluser from "./alluser";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/send">send</Link>
      <Link to="/inbox">inbox</Link>
      <Link to={"/sent"}>Sent</Link>
      <Alluser />
    </div>
  );
};

export default Home;
