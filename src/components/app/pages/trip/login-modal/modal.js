import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
function Modal() {
    const navigate = useNavigate();
    return ReactDOM.createPortal(
        <>
            <div
                className="position-fixed top-0 left-0 w-100 h-100  bg-dark"
                style={{ zIndex: 1000, opacity: 0.5 }}
                id="backdrop"
            />
            <div
                className="position-fixed top-0 left-0 h-100 w-100 d-flex flex-column justify-content-center align-items-center p-2"
                style={{ zIndex: 1001 }}
            >
                <div
                    className="position-relative d-flex flex-column align-items-center bg-white p-2 rounded"
                    id="modal"
                >
                    <div className="d-flex flex-column gap-2">
                        <h4>You need an account to continue</h4>
                        <input
                            type="button"
                            value="Login"
                            className="btn mybtn w-100 p-2 btntxt boldtxt"
                            onClick={(e) => navigate("/login")}
                        />
                        <div className="text-center">or</div>
                        <input
                            type="button"
                            value="Register"
                            className="btn btn-outline-dark w-100 p-2"
                            onClick={(e) => navigate("/register")}
                        />
                    </div>
                </div>
            </div>
        </>,
        document.querySelector("#root")
    );
}

export default Modal;
