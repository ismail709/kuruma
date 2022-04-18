import React, { memo } from "react";

//images
import car1Img from "../img/ic-car-toyota.png";
import car2Img from "../img/ic-car-mercedes.png";
import car3Img from "../img/ic-car-jaguar.png";

const  CarCollectionSlider = memo(()=>{
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner text-center">
                <div className="carousel-item active p-4">
                    <img
                        src={car1Img}
                        className="d-block w-auto mx-auto"
                        alt="car1"
                    />
                    <div className="mt-2">
                        <h4>Toyota</h4>
                        <div className="">
                            Aute reprehenderit incididunt aute do pariatur
                            dolore in laborum cillum.
                        </div>
                    </div>
                </div>
                <div className="carousel-item p-4">
                    <img
                        src={car2Img}
                        className="d-block w-auto mx-auto"
                        alt="car2"
                    />
                    <div className="mt-2">
                        <h4>Mercedes</h4>
                        <div className="">
                            Aute reprehenderit incididunt aute do pariatur
                            dolore in laborum cillum.
                        </div>
                    </div>
                </div>
                <div className="carousel-item p-4">
                    <img
                        src={car3Img}
                        className="d-block w-auto mx-auto"
                        alt="car3"
                    />
                    <div className="mt-2">
                        <h4>Jaguar</h4>
                        <div className="">
                            Aute reprehenderit incididunt aute do pariatur
                            dolore in laborum cillum.
                        </div>
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
});

export default CarCollectionSlider;
