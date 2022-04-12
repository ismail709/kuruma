import React from "react";
import logo from "../img/Kuruma.png";
function CarCollection() {
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active p-4">
                    <img
                        src={logo}
                        className="d-block w-auto mx-auto"
                        alt="..."
                    />
                    <div className="mt-2">
                        <div className="h2 fw-bold">CarName</div>
                        <div className="regtxt">Car Info</div>
                    </div>
                </div>
                <div className="carousel-item p-4">
                    <img
                        src={logo}
                        className="d-block w-auto mx-auto"
                        alt="..."
                    />
                    <div className="mt-2">
                        <div className="h2 fw-bold">CarName</div>
                        <div className="regtxt">Car Info</div>
                    </div>
                </div>
                <div className="carousel-item p-4">
                    <img
                        src={logo}
                        className="d-block w-auto mx-auto"
                        alt="..."
                    />
                    <div className="mt-2">
                        <div className="h2 fw-bold">CarName</div>
                        <div className="regtxt">Car Info</div>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarCollection;
