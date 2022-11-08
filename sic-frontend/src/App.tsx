import React, { useEffect } from "react";
import logo from "./logo.svg";
import { useUserSetingsStore } from "./store";
import { UserSettingsModel } from "./models/StoreModels";
import { themeSwitcher } from "./utilities/themeSwitcher";
import Navbar from "./components/Navbar";

function App() {
  const dark = useUserSetingsStore((state: UserSettingsModel) => state.dark);

  useEffect(() => {
    themeSwitcher(dark);
  }, [dark]);

  return (
    <div className="bg-white dark:bg-gray-800 text-[1.6rem] mx-3">
      <Navbar />
        <div className="bg-white dark:bg-gray-800">
          <h1 className="text-gray-900 dark:text-white">Dark mode</h1>
          <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
        </div>
        <h1 className="text-3xl font-serif font-[600] underline text-black dark:text-white">
          Hello world!
        </h1>
        <img src={logo} className="dark:text-white" alt="logo" />
        <a
          className="text-gray-900 dark:text-white"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
