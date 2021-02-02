import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <AiIcons.AiFillWechat />,
    cName: "nav-text",
  },
  {
    title: "Todos",
    path: "/todos",
    icon: <FaIcons.FaTasks />,
    cName: "nav-text",
  },
  {
    title: "Account",
    path: "/account",
    icon: <MdIcons.MdAccountCircle />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    icon: <GrIcons.GrLogout />,
    cName: "logout",
  },
];
