import AppBar from "./components/AppBar";
import "./App.css";
import { Outlet } from "react-router-dom";
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
