import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../img/kuruma.svg";

function NavBar() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (e.target.id === "join") {
            navigate("/app/account/register", { state: { isSignup: true } });
        } else {
            navigate("/app/account/login", { state: { isSignup: false } });
        }
    };
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">
                        <img src={logo} className="mylogo" alt="logo" />
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
                                <a className="nav-link active" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#howitworks">
                                    How it works
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#price">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item">
                                <button
                                    onClick={(e) => handleClick(e)}
                                    className="btn text-muted w-100 text-start"
                                >
                                    Sign in
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    id="join"
                                    className="btn rounded-pill text-center text-white fw-bold mybtn px-5 w-100"
                                    onClick={(e) => handleClick(e)}
                                >
                                    Join
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
