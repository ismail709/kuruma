import React, { useEffect } from "react";
import AppBar from "./components/AppBar";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/app/search");
    }, []);
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
