import React from "react";
import { UserSettingsModel } from "../models/StoreModels";
import { useUserSetingsStore } from "../store/settings-store";
import Button from "./Button";
import clsx from 'clsx';

function ThemeSwitcher() {
    const dark = useUserSetingsStore((state: UserSettingsModel) => state.dark);
    const toggleDark = useUserSetingsStore(
    (state: UserSettingsModel) => state.toggleDark
  );
  return (
    <Button
      onClick={toggleDark}
      className="text-gray-500 ring-4 ring-gray-400 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    >
      <svg
        className={clsx('w-6 h-6', dark && 'hidden')}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
      <svg
        className={clsx('w-6 h-6', !dark && 'hidden')}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
      </svg>
    </Button>
  );
}

export default ThemeSwitcher;
