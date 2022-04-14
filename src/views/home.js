import React from "react";
import "./home.css";
import NavBar from "../components/NavBar";
import Searchform from "../components/Searchform";
import CarCollection from "../components/CarCollection";

// images
import logo from "../img/kuruma.svg";

import heroImgS from "../img/ic-hero-image-small.png";
import heroImgM from "../img/ic-hero-image-medium.png";
import heroImgL from "../img/ic-hero-image-large.png";

import searchImg from "../img/ic-search-car.svg";
import unlockImg from "../img/ic-unlock-car.svg";
import snowboardingImg from "../img/ic-snowboarding.svg";

import electricCarImgS from "../img/ic-electric-car-small.png";

import cheapImg from "../img/ic-cheap.svg";
import quickImg from "../img/ic-quick.svg";
import mapImg from "../img/ic-map.svg";
import anytimeImg from "../img/ic-book-anytime.svg";

import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/app");
    };

    return (
        <div className="homepage">
            <NavBar />
            <div className="row">
                <h1 className="text-center mb-3">
                    Stop running after the bus and rent a car now!
                </h1>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <picture>
                        <source srcSet={heroImgS} media="(max-width: 600px)" />
                        <source srcSet={heroImgM} media="(min-width: 600px)" />
                        <source srcSet={heroImgL} media="(min-width: 992px)" />
                        <img src={heroImgL} alt="hero img, a man running" />
                    </picture>
                </div>
                <div className="col-md-6">
                    <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                        <Searchform />
                    </div>
                </div>
            </div>
            <hr />
            <h2>Book a car in 3 steps</h2>
            <div className="row">
                <div className="col-md-4 d-flex flex-column p-4">
                    <img
                        src={searchImg}
                        className=""
                        height="130px"
                        alt="choose a car"
                    />
                    <div className="text-center">
                        <h4>Choose a car</h4>
                        <div className=" ">
                            Browse the map and check the available cars near
                            you, and choose the one you like
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex flex-column p-4">
                    <img
                        src={unlockImg}
                        className=""
                        height="130px"
                        alt="Unlock the car"
                    />
                    <div className="text-center">
                        <h4>Unlock the car</h4>
                        <div className=" ">
                            Use your phone to unlock the car, if you can’t find
                            it use the honk to locate it
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex flex-column p-4">
                    <img
                        src={snowboardingImg}
                        className=""
                        height="130px"
                        alt="Enjoy your trip"
                    />
                    <div className="text-center">
                        <h4>Enjoy your trip</h4>
                        <div className=" ">
                            Be sure to have fun, invite your friend, hang out
                            with your partner or take the kids to the park.
                        </div>
                    </div>
                </div>
                <div className="col p-4">
                    <button className="btn mybtn w-100 p-2 btntxt boldtxt">
                        Pricing
                    </button>
                </div>
            </div>

            <hr />
            <h2>Our car collection</h2>
            <CarCollection />
            <div className="content-section row p-0">
                <div className="p-2 col-md-6">
                    Fugiat adipisicing Lorem duis voluptate dolor commodo
                    voluptate eu duis laboris aute eu. Veniam magna id aliquip
                    ut velit aliqua aute sit sunt elit. Ea fugiat nostrud
                    nostrud tempor velit ut in sint consectetur. Ea fugiat
                    nostrud nostrud tempor velit ut in sint consectetur. Ea
                    fugiat nostrud nostrud tempor velit ut in sint consectetur.
                    Ea fugiat no
                </div>
                <img
                    src={electricCarImgS}
                    className="col-md-6 p-0"
                    alt="electric car"
                />
            </div>
            <h2>
                Why <img src={logo} className="mylogo" alt="logo" />?
            </h2>
            <div className="row">
                <div className="col-md-6 d-flex flex-column p-4">
                    <img
                        src={cheapImg}
                        className=""
                        alt="cheap"
                        height="130px"
                    />
                    <div className="text-center">
                        <h4>It’s cheap</h4>
                        <div className=" ">
                            With kuruma, you don’t have to pay gas fees,
                            insurance, parking* nor maintenance.
                        </div>
                    </div>
                </div>

                <div className="col-md-6 d-flex flex-column p-4">
                    <img
                        src={quickImg}
                        height="130px"
                        className=""
                        alt="quick"
                    />
                    <div className="text-center">
                        <h4>It’s quick</h4>
                        <div className=" ">
                            Booking a car takes only a couple of seconds with
                            Kuruma.
                        </div>
                    </div>
                </div>

                <div className="col-md-6 d-flex flex-column p-4">
                    <img
                        src={mapImg}
                        height="130px"
                        className=""
                        alt="everywhere"
                    />
                    <div className="text-center">
                        <h4>It’s everywhere</h4>
                        <div className=" ">
                            You can find our cars all over the place in many
                            countries in Europe and North America.
                        </div>
                    </div>
                </div>

                <div className="col-md-6 d-flex flex-column p-4">
                    <img
                        src={anytimeImg}
                        height="130px"
                        className=""
                        alt="anytime"
                    />
                    <div className="text-center">
                        <h4>It’s anytime</h4>
                        <div className=" ">
                            It’s midnight and you need car? No problem, our
                            service is available 24/7.
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row text-center">
                <h2 className="col-12">Ready to drive?</h2>
                <div className="col-12">
                    No more waiting for the bus, Kuruma got your back
                </div>
                <div className="p-4 col-12">
                    <button
                        onClick={handleClick}
                        className="btn mybtn w-100 p-2 btntxt boldtxt"
                    >
                        Book a car now
                    </button>
                </div>
            </div>
            <div className="myfooter btntxt d-flex flex-column justify-content-center">
                <div className="mylogotxt text-center">Kuruma</div>
                <div className="bg-white smalldivider"></div>
                <ul className="list-unstyled">
                    <li>
                        <a className="nav-link text-white" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav-link text-white" href="#howit">
                            How it works
                        </a>
                    </li>
                    <li>
                        <a className="nav-link text-white" href="#price">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a className="nav-link text-white" href="#faq">
                            FAQ
                        </a>
                    </li>
                </ul>
                <div className="regtxt">
                    copyright © 2022 Kuruma. All Rights Reserved
                </div>
            </div>
        </div>
    );
}

export default Home;
