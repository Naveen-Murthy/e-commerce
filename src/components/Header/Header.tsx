import React, { FC } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header>
    <div className="company_logo">
      <Link to={"/"}>Company Name</Link>
    </div>
    <div className="navigations">
      <Link to={"login"}>Login/Signup</Link>
    </div>
  </header>
);

export default Header;
