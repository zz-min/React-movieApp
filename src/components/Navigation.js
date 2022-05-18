import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;

//a태그 href속성을 쓰면 HTML에서는 해당 페이지가 새로고침됨
//따라서 lINK를 써보자
