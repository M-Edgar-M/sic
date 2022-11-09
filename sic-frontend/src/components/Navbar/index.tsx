import SearchBar from "../Searchbar";
import ThemeSwitcher from "../ThemeSwitcher";

function Navbar() {
  return (
    <div className="flex w-full justify-between items-center bg-white border-t border-l border-r dark:border-b-2 rounded-lg mt-1.5 mb-2.5 shadow-bottom-grey dark:shadow-bottom-white">
      <div className="flex sm:w-1/2 lg:w-3/5 xl:w-1/2 [&>*]:mx-[3%] my-[1%]">
        <span>Logo</span>
        <SearchBar />
      </div>

      <div className="flex w-1/3 justify-end [&>*]:mx-[3%] my-[1%]">
        <span>
          <ThemeSwitcher />
        </span>
        <span>Notification</span>
        <span>Profile Pic</span>
      </div>
    </div>
  );
}

export default Navbar;
