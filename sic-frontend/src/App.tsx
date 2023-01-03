import React, { Fragment, useEffect } from "react";
import logo from "./logo.svg";
import { useUserSetingsStore } from "./store/settings-store";
import { UserSettingsModel } from "./models/StoreModels";
import { themeSwitcher } from "./utilities/themeSwitcher";
import Layout from "./components/Layout";
import {Link, Outlet, Route } from "react-router-dom";

function App() {
  const dark = useUserSetingsStore((state: UserSettingsModel) => state.dark);
  useEffect(() => {
    themeSwitcher(dark);
  }, [dark]);

  return (
    <Fragment>
      <Outlet />
    <Layout>
      <div className="bg-white dark:bg-gray-800 h-full w-full">
        <div>sdfksjdkfl</div>
        <Link to="/login">Login</Link>
      </div>
    </Layout>
    </Fragment>
  );
}

export default App;
