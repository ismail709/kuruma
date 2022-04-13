import React from "react";
import eleccar from "../img/ic-electric-car-small.png";

function TripCard({ carname, enddate }) {
    return (
        <div className="card m-2 tripcardbg bg-gradient">
            <div className="row g-0">
                <div className="col-4 d-flex justify-content-center">
                    <img src={eleccar} className="img-fluid rounded-start" />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{carname}</h5>
                        <p className="card-text">Ended at {enddate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TripCard;
