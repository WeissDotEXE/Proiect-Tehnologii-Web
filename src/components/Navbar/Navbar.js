import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cn from "classnames";

const Navbar = ({ currentPage }) => {
  const rootCls = cn(
    "flex",
    "align-center",
    "justify-between",
    "drop-shadow-xl",
    "bg-white",
    "items-center",
    "px-4"
  );
  console.log(currentPage);

  const navbarLinks = [
    { path: "/notes", text: "Notes" },
    { path: "/tasks", text: "Tasks" },
    { path: "/studygroup", text: "Groups" },
  ];

  return (
    <div className={rootCls}>
      <h1 className="my-4">Proiect Tehnologii Web</h1>
      <div>
        {navbarLinks.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.path}
              className={`px-4 py-2 rounded-lg mx-2 ${
                currentPage === item.path && "bg-gray-300"
              }`}
            >
              {item.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
