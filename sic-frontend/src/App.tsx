import React, { useEffect } from "react";
import { useUserSetingsStore } from "./store/settings-store";
import { UserSettingsModel } from "./models/StoreModels";
import { themeSwitcher } from "./utilities/themeSwitcher";
import Layout from "./components/Layout";
import UserHomeBar from "./components/UserHomeBar";

function App() {
  const dark = useUserSetingsStore((state: UserSettingsModel) => state.dark);
  useEffect(() => {
    themeSwitcher(dark);
  }, [dark]);
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 h-full w-full m-4">
          <UserHomeBar />
      </div>
    </Layout>
  );
}

export default App;
