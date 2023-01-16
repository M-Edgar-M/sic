import { ChildrenProps } from "../../models/PropsModels";
import Navbar from "../Navbar";

function Layout({ children }: ChildrenProps) {
  return (
    <main className="bg-white dark:bg-gray-800">
      <nav className="w-[96%] m-auto">
        <Navbar />
      </nav>
      <div className="w-[96%] m-auto">
      {children}
      </div>
    </main>
  );
}

export default Layout;
