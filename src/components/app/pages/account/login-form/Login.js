import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../../../../../api/user";
import SignInSchema from "../../../../../helpers/schema-validation/SignInSchema";
import { serializeForm } from "../../../../../helpers/serialize-form/serializeform";
import { setUser } from "../../../../../slices/user";

function Login() {
    // invalid inputs error
    const [Error, setError] = useState(null);

    // successful registration
    const [SuccessMessage, setSuccessMessage] = useState(null);

    // dispatch
    const dispatch = useDispatch();

    // navigate
    const navigate = useNavigate();

    // Login hook
    const [logIn, status] = useLogInMutation();

    // fill form function
    const fillForm = (e) => {
        e.preventDefault();
        const form = document.querySelector("form");
        const values = ["user001@test.com", "12345678"];
        for (let i = 0; i < 2; i++) {
            form.elements[i].value = values[i];
        }
    };

    const hideError = React.useCallback(() => {
        setTimeout(() => {
            setError(null);
        }, 5000);
    }, []);

    const handleSubmit = React.useCallback(
        (e) => {
            // prevent page refresh
            e.preventDefault();
            // hide error msg
            setError(null);
            // validate the form
            SignInSchema.validate(serializeForm(e.target))
                .then(async (res) => {
                    try {
                        const r = await logIn(res);
                        if (r.error) {
                            setError(r.error.data.message);
                        } else {
                            const { _id, username } = r.data.user;
                            dispatch(setUser({ id: _id, username: username }));
                            setSuccessMessage(
                                "Logged In Succesfully ! You'll be redirected to Map..."
                            );
                            setTimeout(() => {
                                navigate("/app");
                            }, 1000);
                        }
                    } catch (err) {
                        setError(err);
                    }
                })
                .catch((err) => {
                    setError(err.errors);
                });
            hideError();
        },
        [dispatch, hideError, logIn, navigate]
    );

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div
                        className="d-flex justify-content-center"
                        style={{ fontSize: "100px" }}
                    >
                        <i className="bi bi-person-circle"></i>
                    </div>
                </div>
                {Error && (
                    <div className="alert alert-danger" role="alert">
                        {Error}
                    </div>
                )}
                {SuccessMessage && (
                    <div className="alert alert-success" role="alert">
                        {SuccessMessage}
                    </div>
                )}
                <form className="col-md-6 col-lg-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="email@example.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="********"
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            type="submit"
                            className="btn mybtn w-100 p-2 btntxt boldtxt"
                            disabled={status.isLoading}
                        >
                            Login
                        </button>
                    </div>
                    {process.env.REACT_APP_IS_DEMO && (
                        <div className="mb-3">
                            <button
                                className="btn btn-outline-secondary w-100 p-2 btntxt boldtxt"
                                onClick={fillForm}
                            >
                                Fill form
                            </button>
                        </div>
                    )}
                </form>
                <div className="col-12 text-center">
                    <h6>
                        Or you can <Link to="/register">sign up</Link> to create
                        a new account
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Login;
