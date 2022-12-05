import React, { useEffect } from "react";
import logo from "./logo.svg";
import { useUserSetingsStore } from "./store";
import { UserSettingsModel } from "./models/StoreModels";
import { themeSwitcher } from "./utilities/themeSwitcher";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
// import axios from "axios";
import AxiosInstance from "./utilities/axios";

function App() {
  const dark = useUserSetingsStore((state: UserSettingsModel) => state.dark);
  useEffect(() => {
    themeSwitcher(dark);
  }, [dark]);
  const getData = async() => {
    const aaa =  await  AxiosInstance.get(`/user`, {
      params: {
        "email": "example1@example.com"
      }
    })
    console.log('🚀 ~ file: App.tsx:21 ~ getData ~ aaa', aaa)
    return aaa;
  } 
  useEffect(() => {
    getData();
  }, [])
  

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
        <img src={logo} className="dark:text-white" alt="logo" />
        <a
          className="text-primary dark:text-white"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Layout>
    </div>
  );
}

export default App;
