import SearchBar from "../Searchbar";
import ThemeSwitcher from "../ThemeSwitcher";
import Logo from "../../img/social-logo.png";
import User from "../User/User";
import Notifications from "../Notifications";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex w-full h-[9vh] justify-between items-center bg-white border-t border-l border-r dark:border-b-2 rounded-lg mt-1.5 mb-2.5 shadow-bottom-grey dark:shadow-bottom-white">
      <div className="flex items-center sm:w-1/2 lg:w-3/5 xl:w-1/2 [&>*]:mx-[3%] my-[1%]">
        <Link to="/">
          <img className="h-6 sm:h-14 lg:h-28 rounded-full" src={Logo} alt="" />
        </Link>
        <SearchBar />
      </div>
      <div className="flex w-1/3 justify-end items-center [&>*]:mx-[3%] my-[1%]">
        <span>
          <ThemeSwitcher />
        </span>
        <div className="relative">
          <Notifications />
        </div>
        <div className="relative">
          <User />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
