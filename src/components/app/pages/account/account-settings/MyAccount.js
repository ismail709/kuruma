import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogOutMutation } from "../../../../../api/user";

function MyAccount() {
    // navigate
    const navigate = useNavigate();

    // logout hook
    const [logout] = useLogOutMutation();

    // logout
    const handleLogout = React.useCallback(async () => {
        const result = await logout();
        if (!result.data.auth) {
            setTimeout(() => {
                navigate("/app/account/login");
            }, 1000);
        }
    }, [logout, navigate]);

    return (
        <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
            <div className="fs-1 fw-bolder">username</div>
            <div className="d-flex flex-row gap-4">
                <button className="btn btn-secondary">settings</button>
                <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                >
                    logout
                </button>
            </div>
        </div>
    );
}

export default MyAccount;
