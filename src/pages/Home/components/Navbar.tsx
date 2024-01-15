import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { useState } from "react";
export function Navbar() {
  function handleLink(routing) {
    window.location.href = `/${routing}`;
  }
  return (
    <>
      <nav className="navbar">
        <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" />

        <ul>
          <button onClick={() => handleLink("")}>
            <li> HOME </li>
          </button>
          <li> ABOUT US </li>
          <li> BOOKS </li>
          <li> NEW RELEASE </li>
          <li> CONTACT US </li>
          <li> BLOG </li>
        </ul>
        <div className="navbar-icon">
          <AccountCircleIcon fontSize="large" />
          <button onClick={() => handleLink("product")}>
            <LocalGroceryStoreIcon fontSize="large" />
          </button>
          <FavoriteIcon fontSize="large" />
        </div>
      </nav>
    </>
  );
}
