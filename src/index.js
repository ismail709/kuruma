import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./store/store";
import { Provider } from "react-redux";
import Search from "./views/Search";
import History from "./views/History";
import Account from "./views/Account";
import Trip from "./views/Trip";
import Home from "./views/home";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/app" element={<App />}>
                    <Route path="search" element={<Search />} />
                    <Route path="trip" element={<Trip />} />
                    <Route path="history" element={<History />} />
                    <Route path="account" element={<Account />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
