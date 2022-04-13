import AppBar from "./components/AppBar";
import "./App.css";
import { Outlet } from "react-router-dom";
// test
function App() {
    return (
        <div className="d-flex flex-column vh-100">
            <div className="flex-grow-1">
                <Outlet />
            </div>
            <div className="">
                <AppBar />
            </div>
        </div>
    );
}

export default App;
