import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function AppBar() {
    return (
        <div className="d-flex justify-content-around fs-1" id="appbar">
            <CustomLink to="/app/search">
                <i className="bi bi-search"></i>
            </CustomLink>

            <CustomLink to="/app/trip">
                <i className="bi bi-flag"></i>
            </CustomLink>

            <CustomLink to="/app/history">
                <i className="bi bi-clock-history"></i>
            </CustomLink>

            <CustomLink to="/app/account">
                <i className="bi bi-person"></i>
            </CustomLink>
        </div>
    );
}

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div
            className="d-flex flex-grow-1 justify-content-center p-2"
            style={{ background: match ? "white" : "#E6E6E6" }}
        >
            <Link
                style={{ color: match ? "#F20089" : "#2D00F7" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default AppBar;
