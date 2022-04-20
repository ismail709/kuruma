import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../../../api/user";
import "./styles.css";

function Account() {
    // navigate
    const navigate = useNavigate();

    // check if user is authenticated
    const { data, isSuccess } = useGetUserQuery();

    useEffect(() => {
        if (isSuccess) {
            if (!data.auth) {
                navigate("/app/account/login");
            } else {
                navigate("/app/account/user");
            }
        }
    }, [data]);

    return <Outlet />;
}

export default Account;
