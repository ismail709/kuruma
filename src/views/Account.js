import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useLogInQuery, useAddUserMutation } from "../api/user";
import "./account.css";


function Account() {
    // handle location state when routing from navbar
    const location = useLocation();

    // handle errors
    const [ErrorMessage, setErrorMessage] = useState();

    const user = useSelector((state) => state.user);
    // switch between two forms
    const [isSignup, setIsSignup] = useState(false);
    // check if the user exists
    const login = useLogInQuery();
    // create new account
    const [addUser, { data, isSuccesss, isLoading, isError, error }] =
        useAddUserMutation();
    // form values
    const [form, setForm] = useState();
    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSignup) {
            const formValues = {
                name: form.name,
                email: form.email,
                password: form.password,
                phone_number: form.phonenumber,
                address: {
                    city: form.city,
                    country: form.country,
                },
            };
            const q = await addUser(formValues);
        }
    };

    // handling server response for singing up
    useEffect(() => {
        if (isError) {
            setErrorMessage(error.data.message);
        } else {
            console.log(data);
        }
    }, [isLoading]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    // set view size
    /*useEffect(() => {
        const appbar = document.querySelector("#appbar");
        const historyview = document.querySelector("#accountview");
        historyview.style.height =
            window.innerHeight - appbar.getBoundingClientRect().height + "px";
        window.onresize = () => {
            historyview.style.height =
                window.innerHeight -
                appbar.getBoundingClientRect().height +
                "px";
        };
    });*/

    // handle routing from home page
    useEffect(() => {
        if (location.state) {
            setIsSignup(location.state.isSignup);
        }
    }, []);
    return (
        <div id="accountview">
            <div className="form-container">
                <div className="d-block">
                    <div
                        className="d-flex justify-content-center"
                        style={{ fontSize: "100px" }}
                    >
                        <i className="bi bi-person-circle"></i>
                    </div>
                    <div className="text-center fs-2">
                        {isSignup && "Create new account"}
                    </div>
                </div>
                {isError && (
                    <div className="alert alert-danger" role="alert">
                        {ErrorMessage}
                    </div>
                )}
                <form className="form">
                    {isSignup && (
                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Name"
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="email@example.com"
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </div>
                    {isSignup && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="cpassword">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="cpassword"
                                    id="cpassword"
                                    className="form-control"
                                    placeholder="********"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phonenumber">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phonenumber"
                                    id="phonenumber"
                                    className="form-control"
                                    placeholder="phone number"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="country">Country</label>
                                <input
                                    list="countrylist"
                                    name="country"
                                    id="country"
                                    className="form-control"
                                    placeholder="Country"
                                    onChange={handleChange}
                                />
                                <datalist id="countrylist">
                                    <option value="Afghanistan" />
                                    <option value="Albania" />
                                    <option value="Algeria" />
                                    <option value="American Samoa" />
                                    <option value="Andorra" />
                                    <option value="Angola" />
                                    <option value="Anguilla" />
                                    <option value="Antarctica" />
                                    <option value="Antigua and Barbuda" />
                                    <option value="Argentina" />
                                    <option value="Armenia" />
                                    <option value="Aruba" />
                                    <option value="Australia" />
                                    <option value="Austria" />
                                    <option value="Azerbaijan" />
                                    <option value="Bahamas" />
                                    <option value="Bahrain" />
                                    <option value="Bangladesh" />
                                    <option value="Barbados" />
                                    <option value="Belarus" />
                                    <option value="Belgium" />
                                    <option value="Belize" />
                                    <option value="Benin" />
                                    <option value="Bermuda" />
                                    <option value="Bhutan" />
                                    <option value="Bolivia" />
                                    <option value="Bosnia and Herzegovina" />
                                    <option value="Botswana" />
                                    <option value="Bouvet Island" />
                                    <option value="Brazil" />
                                    <option value="British Indian Ocean Territory" />
                                    <option value="Brunei Darussalam" />
                                    <option value="Bulgaria" />
                                    <option value="Burkina Faso" />
                                    <option value="Burundi" />
                                    <option value="Cambodia" />
                                    <option value="Cameroon" />
                                    <option value="Canada" />
                                    <option value="Cape Verde" />
                                    <option value="Cayman Islands" />
                                    <option value="Central African Republic" />
                                    <option value="Chad" />
                                    <option value="Chile" />
                                    <option value="China" />
                                    <option value="Christmas Island" />
                                    <option value="Cocos (Keeling) Islands" />
                                    <option value="Colombia" />
                                    <option value="Comoros" />
                                    <option value="Congo" />
                                    <option value="Congo, The Democratic Republic of The" />
                                    <option value="Cook Islands" />
                                    <option value="Costa Rica" />
                                    <option value="Cote D'ivoire" />
                                    <option value="Croatia" />
                                    <option value="Cuba" />
                                    <option value="Cyprus" />
                                    <option value="Czech Republic" />
                                    <option value="Denmark" />
                                    <option value="Djibouti" />
                                    <option value="Dominica" />
                                    <option value="Dominican Republic" />
                                    <option value="Ecuador" />
                                    <option value="Egypt" />
                                    <option value="El Salvador" />
                                    <option value="Equatorial Guinea" />
                                    <option value="Eritrea" />
                                    <option value="Estonia" />
                                    <option value="Ethiopia" />
                                    <option value="Falkland Islands (Malvinas)" />
                                    <option value="Faroe Islands" />
                                    <option value="Fiji" />
                                    <option value="Finland" />
                                    <option value="France" />
                                    <option value="French Guiana" />
                                    <option value="French Polynesia" />
                                    <option value="French Southern Territories" />
                                    <option value="Gabon" />
                                    <option value="Gambia" />
                                    <option value="Georgia" />
                                    <option value="Germany" />
                                    <option value="Ghana" />
                                    <option value="Gibraltar" />
                                    <option value="Greece" />
                                    <option value="Greenland" />
                                    <option value="Grenada" />
                                    <option value="Guadeloupe" />
                                    <option value="Guam" />
                                    <option value="Guatemala" />
                                    <option value="Guinea" />
                                    <option value="Guinea-bissau" />
                                    <option value="Guyana" />
                                    <option value="Haiti" />
                                    <option value="Heard Island and Mcdonald Islands" />
                                    <option value="Holy See (Vatican City State)" />
                                    <option value="Honduras" />
                                    <option value="Hong Kong" />
                                    <option value="Hungary" />
                                    <option value="Iceland" />
                                    <option value="India" />
                                    <option value="Indonesia" />
                                    <option value="Iran, Islamic Republic of" />
                                    <option value="Iraq" />
                                    <option value="Ireland" />
                                    <option value="Israel" />
                                    <option value="Italy" />
                                    <option value="Jamaica" />
                                    <option value="Japan" />
                                    <option value="Jordan" />
                                    <option value="Kazakhstan" />
                                    <option value="Kenya" />
                                    <option value="Kiribati" />
                                    <option value="Korea, Democratic People's Republic of" />
                                    <option value="Korea, Republic of" />
                                    <option value="Kuwait" />
                                    <option value="Kyrgyzstan" />
                                    <option value="Lao People's Democratic Republic" />
                                    <option value="Latvia" />
                                    <option value="Lebanon" />
                                    <option value="Lesotho" />
                                    <option value="Liberia" />
                                    <option value="Libyan Arab Jamahiriya" />
                                    <option value="Liechtenstein" />
                                    <option value="Lithuania" />
                                    <option value="Luxembourg" />
                                    <option value="Macao" />
                                    <option value="Macedonia, The Former Yugoslav Republic of" />
                                    <option value="Madagascar" />
                                    <option value="Malawi" />
                                    <option value="Malaysia" />
                                    <option value="Maldives" />
                                    <option value="Mali" />
                                    <option value="Malta" />
                                    <option value="Marshall Islands" />
                                    <option value="Martinique" />
                                    <option value="Mauritania" />
                                    <option value="Mauritius" />
                                    <option value="Mayotte" />
                                    <option value="Mexico" />
                                    <option value="Micronesia, Federated States of" />
                                    <option value="Moldova, Republic of" />
                                    <option value="Monaco" />
                                    <option value="Mongolia" />
                                    <option value="Montserrat" />
                                    <option value="Morocco" />
                                    <option value="Mozambique" />
                                    <option value="Myanmar" />
                                    <option value="Namibia" />
                                    <option value="Nauru" />
                                    <option value="Nepal" />
                                    <option value="Netherlands" />
                                    <option value="Netherlands Antilles" />
                                    <option value="New Caledonia" />
                                    <option value="New Zealand" />
                                    <option value="Nicaragua" />
                                    <option value="Niger" />
                                    <option value="Nigeria" />
                                    <option value="Niue" />
                                    <option value="Norfolk Island" />
                                    <option value="Northern Mariana Islands" />
                                    <option value="Norway" />
                                    <option value="Oman" />
                                    <option value="Pakistan" />
                                    <option value="Palau" />
                                    <option value="Palestinian Territory, Occupied" />
                                    <option value="Panama" />
                                    <option value="Papua New Guinea" />
                                    <option value="Paraguay" />
                                    <option value="Peru" />
                                    <option value="Philippines" />
                                    <option value="Pitcairn" />
                                    <option value="Poland" />
                                    <option value="Portugal" />
                                    <option value="Puerto Rico" />
                                    <option value="Qatar" />
                                    <option value="Reunion" />
                                    <option value="Romania" />
                                    <option value="Russian Federation" />
                                    <option value="Rwanda" />
                                    <option value="Saint Helena" />
                                    <option value="Saint Kitts and Nevis" />
                                    <option value="Saint Lucia" />
                                    <option value="Saint Pierre and Miquelon" />
                                    <option value="Saint Vincent and The Grenadines" />
                                    <option value="Samoa" />
                                    <option value="San Marino" />
                                    <option value="Sao Tome and Principe" />
                                    <option value="Saudi Arabia" />
                                    <option value="Senegal" />
                                    <option value="Serbia and Montenegro" />
                                    <option value="Seychelles" />
                                    <option value="Sierra Leone" />
                                    <option value="Singapore" />
                                    <option value="Slovakia" />
                                    <option value="Slovenia" />
                                    <option value="Solomon Islands" />
                                    <option value="Somalia" />
                                    <option value="South Africa" />
                                    <option value="South Georgia and The South Sandwich Islands" />
                                    <option value="Spain" />
                                    <option value="Sri Lanka" />
                                    <option value="Sudan" />
                                    <option value="Suriname" />
                                    <option value="Svalbard and Jan Mayen" />
                                    <option value="Swaziland" />
                                    <option value="Sweden" />
                                    <option value="Switzerland" />
                                    <option value="Syrian Arab Republic" />
                                    <option value="Taiwan, Province of China" />
                                    <option value="Tajikistan" />
                                    <option value="Tanzania, United Republic of" />
                                    <option value="Thailand" />
                                    <option value="Timor-leste" />
                                    <option value="Togo" />
                                    <option value="Tokelau" />
                                    <option value="Tonga" />
                                    <option value="Trinidad and Tobago" />
                                    <option value="Tunisia" />
                                    <option value="Turkey" />
                                    <option value="Turkmenistan" />
                                    <option value="Turks and Caicos Islands" />
                                    <option value="Tuvalu" />
                                    <option value="Uganda" />
                                    <option value="Ukraine" />
                                    <option value="United Arab Emirates" />
                                    <option value="United Kingdom" />
                                    <option value="United States" />
                                    <option value="United States Minor Outlying Islands" />
                                    <option value="Uruguay" />
                                    <option value="Uzbekistan" />
                                    <option value="Vanuatu" />
                                    <option value="Venezuela" />
                                    <option value="Viet Nam" />
                                    <option value="Virgin Islands, British" />
                                    <option value="Virgin Islands, U.S" />
                                    <option value="Wallis and Futuna" />
                                    <option value="Western Sahara" />
                                    <option value="Yemen" />
                                    <option value="Zambia" />
                                    <option value="Zimbabwe" />
                                </datalist>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="City"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}
                    <div className="mb-3">
                        <button
                            onClick={(e) => handleSubmit(e)}
                            className="btn mybtn w-100 p-2 btntxt boldtxt"
                        >
                            {isSignup ? "Sign up" : "Login"}
                        </button>
                    </div>
                </form>
                <div className="">
                    {isSignup ? (
                        <>
                            <div className="mb-3">
                                Already have an account?{" "}
                                <a
                                    className="link"
                                    onClick={(e) => setIsSignup(false)}
                                >
                                    log in
                                </a>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-3">
                                Don't have an account?{" "}
                                <a
                                    className="link"
                                    onClick={(e) => setIsSignup(true)}
                                >
                                    create account
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Account;
