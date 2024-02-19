import React from "react";
import { useNavigate } from "react-router";

function Nav() {
  const navi = useNavigate();

  const HandleNavi = () => {
    navi("/");
  };

  return (
    <div>
      <h1 onClick={HandleNavi}>안녕하세요</h1>
    </div>
  );
}

export default Nav;
