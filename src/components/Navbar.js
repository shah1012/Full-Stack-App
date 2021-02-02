import React, { useState } from "react";

import { SidebarData } from "./SidebarData";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

import Obj from "../Firebase-Files/Firebase";
const { auth } = Obj;

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h4>Firebase login</h4>
      </div>
      <ul className={sidebar ? "nav-active nav-links" : "nav-links"}>
        {SidebarData.map((item, index) => {
          if (item.cName === "logout") {
            return (
              <button key={index} onClick={handleSignOut}>
                Logout
              </button>
            );
          } else {
            return (
              <li
                key={index}
                className={item.cName}
                style={{ animation: "navLinkFade 0.5s ease forwards" }}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          }
        })}
      </ul>

      <div className="burger" onClick={showSidebar}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
