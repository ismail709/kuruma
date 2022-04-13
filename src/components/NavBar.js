import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/kuruma.svg";

function NavBar() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (e.target.id == "join") {
            navigate("/app/account", { state: { isSignup: true } });
        } else {
            navigate("/app/account", { state: { isSignup: false } });
        }
    };
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="mylogo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    How it works
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={(e) => handleClick(e)}
                                    className="nav-link"
                                    href="#"
                                >
                                    Sign in
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    id="join"
                                    className="nav-link rounded-pill text-center text-white fw-bold mybtn px-5"
                                    href="#"
                                    onClick={(e) => handleClick(e)}
                                >
                                    Join
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
