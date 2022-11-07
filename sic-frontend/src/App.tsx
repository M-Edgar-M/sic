import React from "react";
import logo from "./logo.svg";
import { useUserSetingsStore } from "./store";
import { UserSettingsModel } from "./models/StoreModels";

function App() {
  const dark = useUserSetingsStore((state: UserSettingsModel) => state.dark);
  console.log("dark: ", dark);

  return (
    <div className="bg-white dark:bg-gray-800">
      <header className="App-header">
        <div className="bg-white dark:bg-gray-800">
          <h1 className="text-gray-900 dark:text-white">Dark mode</h1>
          <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
        </div>
        <h1 className="text-3xl font-bold underline text-green-200 dark:text-white">
          Hello world!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="text-gray-900 dark:text-white"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
