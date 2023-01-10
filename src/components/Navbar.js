import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex color text">
      <button className="margin btn">Notes</button>
      <button className="margin btn">Tasks</button>
      <button className="margin btn">Groups</button>
      <button className="btn_imagine"> </button>
    </div>
  );
};

export default Navbar;
