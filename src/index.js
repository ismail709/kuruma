import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./store/store";
import { Provider } from "react-redux";

import Home from "./components/homepage";
import App from "./components/app";
import Map from "./components/app/pages/map";
import History from "./components/app/pages/history";
import Trip from "./components/app/pages/trip";
import Account from "./components/app/pages/account";
import Login from "./components/app/pages/account/login-form";
import Register from "./components/app/pages/account/sign-up-form";
import MyAccount from "./components/app/pages/account/account-settings";

import "mapbox-gl/dist/mapbox-gl.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} exact />
                <Route path="/app" element={<App />}>
                    <Route index element={<Map />} />
                    <Route path="trip" element={<Trip />} />
                    <Route path="history" element={<History />} />
                    <Route path="account" element={<Account />}>
                        <Route index element={<MyAccount />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
