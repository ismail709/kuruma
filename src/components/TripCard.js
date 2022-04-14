import React from "react";
import "./tripcard.css";
import eleccar from "../img/ic-electric-car-small.png";

function TripCard({ carname, enddate }) {
    return (
        <div className="trip-card-container">
            <div className="">
                <img
                    src={eleccar}
                    width="150px"
                    height="150px"
                    style={{ objectFit: "cover" }}
                    alt={carname}
                />
            </div>
            <div className="">
                <div className="">
                    <h5 className="">{carname}</h5>
                    <p className="">Ended at {enddate}</p>
                </div>
            </div>
        </div>
    );
}

export default TripCard;
