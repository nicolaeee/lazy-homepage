import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const toggleTheme = () => {
    const body = document.querySelector("body");
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "dark") {
      body.setAttribute("data-theme", "light");
      body.style.backgroundColor = "rgb(240, 231, 219)"; // Set the light mode background color
      body.style.color = "#000000"; // Set the light mode text color
    } else {
      body.setAttribute("data-theme", "dark");
      body.style.backgroundColor = "rgb(32, 32, 35)"; // Set the dark mode background color
      body.style.color = "#ffffff"; // Set the dark mode text color
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
