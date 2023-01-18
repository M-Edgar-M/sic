import { ChildrenProps } from "../../models/PropsModels";
import Navbar from "../Navbar";

function Layout({ children }: ChildrenProps) {
  return (
    <main className="bg-white dark:bg-gray-800">
      <nav className="w-full m-auto">
        <Navbar />
      </nav>
      <div className="w-full m-auto">
      {children}
      </div>
    </main>
  );
}

export default Layout;
