import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";

function Welcome() {
  const style = {
    backgroundSize: "cover",
    backgroundImage:
      "url('https://img5.goodfon.com/original/1920x1080/0/ad/4k-ultra-hd-background-staircase-dark-room-backlight-lightin.jpg')",
    height: "100vh",
    backgroundRepeat: "no-repeat",
  };
  const history = useHistory();
  return (
    <div style={style}>
      <Base>
        <h1 className="welcomequote" style={{ color: "whitesmoke" }}>
          Welcome to Students and Teachers Database
        </h1>

        <button
          style={{ cursor: "pointer" }}
          className="btnsec"
          onClick={() => history.push("/studdata")}
        >
          Students Data
        </button>
        <button
          style={{ cursor: "pointer" }}
          className="btnsec"
          onClick={() => history.push("/teacherdata")}
        >
          Teachers Data
        </button>
      </Base>
    </div>
  );
}

export default Welcome;
