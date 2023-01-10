/* eslint-disable jsx-a11y/anchor-is-valid */
// TODO: handle eslint warning
import clsx from "clsx";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutSide";
import Avatar from "../../img/avatar.jpg";

function User() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setShowSubMenu(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <>
      <img
        id="avatarButton"
        onClick={() => setShowSubMenu(!showSubMenu)}
        className="w-14 h-14 rounded-full cursor-pointer"
        src={Avatar}
        alt="User dropdown"
        ref={ref}
      />
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
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-1 text-[1.4rem] text-gray-700 dark:text-gray-200"
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

export default User;
