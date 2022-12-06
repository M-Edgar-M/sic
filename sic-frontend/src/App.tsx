import React, { useEffect } from "react";
import logo from "./logo.svg";
import { useUserSetingsStore } from "./store/settings-store";
import { UserSettingsModel } from "./models/StoreModels";
import { themeSwitcher } from "./utilities/themeSwitcher";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  const dark = useUserSetingsStore((state: UserSettingsModel) => state.dark);
  useEffect(() => {
    themeSwitcher(dark);
  }, [dark]);

  return (
    <div className="text-[1.6rem] mx-3">
      <Navbar />
      <Layout>
        <div className="bg-white dark:bg-gray-800">
          <h1 className="text-gray-900 dark:text-white">Dark mode</h1>
          SOME TEXT
          <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
        </div>
        <h1 className="text-3xl font-serif font-[600] underline text-black dark:text-white">
          Hello world!
        </h1>
        <Login />
      </Layout>
    </div>
  );
}

export default App;
