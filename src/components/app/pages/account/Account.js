import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetUserQuery, useLogOutMutation } from "../../../../api/user";
import { setUser } from "../../../../slices/user";
import "./styles.css";

function Account() {
    // user data
    const user = useSelector((state) => state.user);

    // dispatch
    const dispatch = useDispatch();

    // navigate
    const navigate = useNavigate();

    // logout hook
    const [logout] = useLogOutMutation();

    // logout
    const handleLogout = React.useCallback(async () => {
        const result = await logout();
        if (!result.error) {
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        }
    }, [logout, navigate]);

    // check if user is authenticated
    const { data, isSuccess, isLoading } = useGetUserQuery();

    useEffect(() => {
        if (isSuccess && data?.auth) {
            dispatch(
                setUser({ id: data.user._id, username: data.user.username })
            );
        }
    });

    //if (Object.keys(user) == 0) return <Navigate to="/login" />;
    if (data?.auth === false) return <Navigate to="/login" />;

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
            <div className="fs-1 fw-bolder">{user.username}</div>
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

export default Account;
