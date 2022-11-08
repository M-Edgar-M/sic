import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";

function Navbar() {
  return (
    <div className="w-full bg-white h-1/6">
      <div className="flex">
        <div>Logo SVG</div>
        <div>Search Bar</div>
      </div>

      <div>
        <div>Notification Icon</div>
        <div>Profile Logo</div>
        <div><ThemeSwitcher /></div>
      </div>
    </div>
  );
}

export default Navbar;
