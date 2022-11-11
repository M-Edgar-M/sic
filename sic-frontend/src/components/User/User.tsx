/* eslint-disable jsx-a11y/anchor-is-valid */
// TODO: handle eslint warning
import clsx from "clsx";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutSide";
import Img from "../../img/new-logo.png";

function User() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setShowSubMenu(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="relative">
      <img
        id="avatarButton"
        onClick={() => setShowSubMenu(!showSubMenu)}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={Img}
        alt="User dropdown"
      />
      <div
        id="userDropdown"
        ref={ref}
        className={clsx(
          !showSubMenu && "hidden",
          "z-10",
          "w-44",
          "bg-white",
          "rounded",
          "divide-y",
          "divide-gray-100",
          "shadow",
          "dark:bg-gray-700",
          "dark:divide-gray-600"
        )}
        style={{
          position: "absolute",
          right: "10%",
          margin: "0px",
          transform: "translate(0px, 10px)",
        }}
      >
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}

export default User;