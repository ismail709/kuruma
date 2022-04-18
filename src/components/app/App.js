import AppBar from "./app-bar";
import "./App.css";
import { Outlet } from "react-router-dom";
import {React} from "react";
// test
function App() {
  return (
      <div className="app">
        <AppBar />
        <Outlet />
      </div>
  );
}

export default App;
