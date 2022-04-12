import React, { useEffect } from "react";
import "./home.css";
import logo from "../img/Kuruma.png";
import eleccar from "../img/eleccar.jpg";
import hero from "../img/hero.png";
import choosecar from "../img/choosecar.png";
import unlock from "../img/unlock.png";
import enjoy from "../img/enjoy.png";
import cheap from "../img/cheap.png";
import everywhere from "../img/everywhere.png";
import anytime from "../img/anytime.png";
import quick from "../img/quick.png";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "../components/NavBar";
import Searchform from "../components/Searchform";
import CarCollection from "../components/CarCollection";

function Home() {
    return (
        <div className="">
            <NavBar />
            <div className="d-flex flex-column gap-4 text-center">
                <div className="display-2 fw-bold mt-2">
                    Why running when you can drive!
                </div>
                <div className="p-3">
                    <img src={hero} className="img-fluid" />
                </div>
                <div className="d-flex flex-column gap-3">
                    <Searchform />
                    <hr />
                    <div className="h1 fw-bold">Book a car in 3 steps</div>
                    <div className="p-5 d-flex flex-column justify-content-center">
                        <div className="">
                            <img src={choosecar} className="img-fluid" />
                        </div>
                        <div className="d-flex flex-column">
                            <div className="h2 fw-bold">Choose a car</div>
                            <div className="regtext">
                                Browse the map and check the available cars near
                                you, and choose the one you like
                            </div>
                        </div>
                        <div className="">
                            <img src={unlock} className="img-fluid" />
                        </div>
                        <div className="d-flex flex-column">
                            <div className="h2 fw-bold">Unlock the car</div>
                            <div className="regtext">
                                Use your phone to unlock the car, if you can’t
                                find it use the honk to locate it
                            </div>
                        </div>
                        <div className="">
                            <img src={enjoy} className="img-fluid" />
                        </div>
                        <div className="d-flex flex-column">
                            <div className="h2 fw-bold">Enjoy your trip</div>
                            <div className="regtext">
                                Be sure to have fun, invite your friend, hang
                                out with your partner or take the kids to the
                                park.
                            </div>
                        </div>
                    </div>
                    <div className="container-md">
                        <button className="btn mybtn w-100 p-2 btntxt boldtxt">
                            Pricing
                        </button>
                    </div>
                    <hr />
                    <div className="h1 fw-bold">Our car collection</div>
                    <CarCollection />
                    <div className="electriccars text-start">
                        <div className="h2 fw-bold text-white p-3">
                            We are committed to protect the environment by
                            encouraging our customers to use electric cars
                        </div>
                        <img src={eleccar} className="img-fluid" />
                    </div>
                    <div className="h1 fw-bold d-flex flex-row justify-content-center align-items-center gap-2">
                        Why <img src={logo} className="mylogo" />?
                    </div>
                    <div className="p-5">
                        <div>
                            <img src={cheap} className="img-fluid" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <div className="h2 fw-bold">It’s cheap</div>
                            <div className="regtext">
                                With kuruma, you don’t have to pay gas fees,
                                insurance, parking* nor maintenance.
                            </div>
                        </div>
                        <div>
                            <img src={quick} className="img-fluid" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <div className="h2 fw-bold">It’s quick</div>
                            <div className="regtext">
                                Booking a car takes only a couple of seconds
                                with Kuruma.
                            </div>
                        </div>
                        <div>
                            <img src={everywhere} className="img-fluid" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <div className="h2 fw-bold">It’s everywhere</div>
                            <div className="regtext">
                                You can find our cars all over the place in many
                                countries in Europe and North America.
                            </div>
                        </div>
                        <div>
                            <img src={anytime} className="img-fluid" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <div className="h2 fw-bold">It’s anytime</div>
                            <div className="regtext">
                                It’s midnight and you need car? No problem, our
                                service is available 24/7.
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container-md">
                        <div className="h1 fw-bold">Ready to drive?</div>
                        <div className="text-center p-2">
                            No more waiting for the bus, Kuruma got your back
                        </div>
                        <button className="btn mybtn w-100 p-2 btntxt boldtxt">
                            Book a car now
                        </button>
                    </div>
                    <div className="myfooter btntxt d-flex flex-column justify-content-center">
                        <div className="mylogotxt text-center">Kuruma</div>
                        <div className="bg-white smalldivider"></div>
                        <ul className="list-unstyled">
                            <li>
                                <a className="nav-link text-white" href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-white" href="#">
                                    How it works
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-white" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-white" href="#">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                        <div className="regtxt">
                            copyright © 2022 Kuruma. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
