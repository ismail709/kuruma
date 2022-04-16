import React, { useEffect, useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./appbar.css";
import logo from "../img/kuruma.svg";

function AppBar() {
    return (
        <div className="appbar">
            <a href="/">
                <img src={logo} alt="logo" width="140px" className="logoimg mb-3" />
            </a>
            <hr/>
            <nav className="mynav">
                <CustomLink to="/app">
                    <i className="bi bi-search"></i>
                    <span className="navtext">Search</span>
                </CustomLink>

                <CustomLink to="/app/trip">
                    <i className="bi bi-flag"></i>
                    <span className="navtext">Trip</span>
                </CustomLink>

                <CustomLink to="/app/history">
                    <i className="bi bi-clock-history"></i>
                    <span className="navtext">History</span>
                </CustomLink>

                <CustomLink to="/app/account">
                    <i className="bi bi-person"></i>
                    <span className="navtext">Account</span>
                </CustomLink>
            </nav>
            <hr className="mb-3" />
            <h6>
                Made with ❤ by <a href="#test">Ismail</a>
            </h6>
        </div>
    );
}

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    const link = useRef(null);

    useEffect(() => {
        if (match) {
            link.current.classList.add("lactive");
        } else {
            link.current.classList.remove("lactive");
        }
    });

    return (
        <>
            <Link to={to} {...props} className="appbar-element" ref={link}>
                {children}
            </Link>
        </>
    );
}

export default AppBar;
