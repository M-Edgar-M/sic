import clsx from "clsx";
import React, { useRef, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutSide";
import Button from "../Button";

export default function Notifications() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setShowSubMenu(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <>
      <Button
        ref={ref}
        onClick={() => setShowSubMenu(!showSubMenu)}
        type="button"
        className="w-[3rem] h-[3rem]"
      >
        <IoMdNotificationsOutline className="w-full h-full dark:fill-midnight" />
      </Button>
      <div
        id="userDropdown"
        className={clsx(
          !showSubMenu && "hidden",
          "absolute-pop-up",
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
      >
        <div className="py-3 px-4 text-[1.4rem] text-gray-900 dark:text-white">
          <div>Jane Dow</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-1 text-[1.4rem] text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <Link
              to="/profile"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Profile
            </Link>
          </li>
        </ul>
        <div className="py-1">
          <Link
            to="login"
            className="block py-2 px-4 text-[1.4rem] text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </Link>
        </div>
      </div>
    </>
  );
}
