import SearchBar from "../Searchbar";
import ThemeSwitcher from "../ThemeSwitcher";
import Logo from "../../img/new-logo.png";
import User from "../User/User";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex w-full h-[9vh] justify-between items-center bg-white border-t border-l border-r dark:border-b-2 rounded-lg mt-1.5 mb-2.5 shadow-bottom-grey dark:shadow-bottom-white">
      <div className="flex items-center sm:w-1/2 lg:w-3/5 xl:w-1/2 [&>*]:mx-[3%] my-[1%]">
        <span>
          <img className="h-6 sm:h-14 lg:h-28" src={Logo} alt="" />
        </span>
        <SearchBar />
      </div>
      <div className="flex w-1/3 justify-end items-center [&>*]:mx-[3%] my-[1%]">
        <span>
          <ThemeSwitcher />
        </span>
        <Link className="w-[3rem] h-[3rem]" to="/notifications">
          <IoMdNotificationsOutline className="w-full h-full dark:fill-midnight" />
        </Link>
        <div className="relative">
          <User />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
