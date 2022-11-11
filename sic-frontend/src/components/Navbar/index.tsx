import SearchBar from "../Searchbar";
import ThemeSwitcher from "../ThemeSwitcher";
import Logo from '../../img/new-logo.png'; 
import User from "../User/User";

function Navbar() {
  return (
    <div className="flex w-full h-[9vh] justify-between items-center bg-white border-t border-l border-r dark:border-b-2 rounded-lg mt-1.5 mb-2.5 shadow-bottom-grey dark:shadow-bottom-white">
      <div className="flex items-center sm:w-1/2 lg:w-3/5 xl:w-1/2 [&>*]:mx-[3%] my-[1%]">
        <span><img className="h-6 sm:h-14 lg:h-28" src={Logo} alt="" /></span>
        <SearchBar />
      </div>

      <div className="flex w-1/3 justify-end items-center [&>*]:mx-[3%] my-[1%]">
        <span>
          <ThemeSwitcher />
        </span>
        <span className="w-[3rem] h-[3rem]">
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </span>
        <span><User /></span>
      </div>
    </div>
  );
}

export default Navbar;
