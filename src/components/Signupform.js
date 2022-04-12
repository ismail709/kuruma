import React from "react";

function SignupForm({ setIsSignup }) {
    return (
        <section className="">
            <div className="d-flex align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <h2 className="text-uppercase text-center mb-5">
                                Create an account
                            </h2>
                            <div
                                className="d-flex justify-content-center"
                                style={{ fontSize: "100px" }}
                            >
                                <i className="bi bi-person-circle"></i>
                            </div>
                            <form>
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        id="form3Example1cg"
                                        className="form-control form-control-lg"
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example1cg"
                                    >
                                        Your Name
                                    </label>
                                </div>

                                <div className="form-outline mb-2">
                                    <input
                                        type="email"
                                        id="form3Example3cg"
                                        className="form-control form-control-lg"
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example3cg"
                                    >
                                        Your Email
                                    </label>
                                </div>

                                <div className="form-outline mb-2">
                                    <input
                                        type="password"
                                        id="form3Example4cg"
                                        className="form-control form-control-lg"
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example4cg"
                                    >
                                        Password
                                    </label>
                                </div>

                                <div className="form-outline mb-2">
                                    <input
                                        type="password"
                                        id="form3Example4cdg"
                                        className="form-control form-control-lg"
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example4cdg"
                                    >
                                        Repeat your password
                                    </label>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-5">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form2Example3cg"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="form2Example3g"
                                    >
                                        I agree all statements in{" "}
                                        <a href="#!" className="text-body">
                                            <u>Terms of service</u>
                                        </a>
                                    </label>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button
                                        type="button"
                                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                    >
                                        Register
                                    </button>
                                </div>

                                <p className="text-center text-muted mt-5 mb-0">
                                    Have already an account?{" "}
                                    <a
                                        onClick={setIsSignup(false)}
                                        className="fw-bold text-body"
                                    >
                                        <u>Login here</u>
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignupForm;
