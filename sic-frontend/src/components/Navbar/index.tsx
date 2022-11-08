import SearchBar from "../Searchbar";
import ThemeSwitcher from "../ThemeSwitcher";

function Navbar() {
  return (
    <div className="flex w-full justify-between bg-white">
      <div className="flex w-1/2 [&>*]:mx-[3%] my-[1%]">
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
