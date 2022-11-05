import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useUserSetingsStore } from './store'
import { UserSettingsModel } from './models/StoreModels'

function App() {
  const dark = useUserSetingsStore((state: UserSettingsModel) => state.dark);
  console.log('dark: ', dark);

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-3xl font-bold underline text-green-200">
      Hello world!
      </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
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
