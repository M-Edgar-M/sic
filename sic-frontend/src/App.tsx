import React, { Fragment, useEffect } from "react";
import { useUserSetingsStore } from "./store/settings-store";
import { UserSettingsModel } from "./models/StoreModels";
import { themeSwitcher } from "./utilities/themeSwitcher";
import Layout from "./components/Layout";

function App() {
  const dark = useUserSetingsStore((state: UserSettingsModel) => state.dark);
  useEffect(() => {
    themeSwitcher(dark);
  }, [dark]);

  return (
    <Fragment>
    <Layout>
      <div className="bg-white dark:bg-gray-800 h-full w-full">
        <div className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, rerum libero. Corrupti blanditiis harum, reprehenderit velit ea magni illum qui rem minus commodi quidem inventore perferendis expedita voluptas itaque dignissimos.</div>
        <div className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic impedit minus dolor architecto iste. Eos facere neque dolores in incidunt labore aliquam blanditiis aspernatur nisi?</div>
      </div>
    </Layout>
    </Fragment>
  );
}

export default App;
