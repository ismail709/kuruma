import React from "react";
import "./styles.css";
import { BASE_URL } from "../../../../api/baseUrl";

function TripCard({ carname, enddate }) {
  return (
    <div className="trip-card-container">
      <div className="">
        <img
          src={
            BASE_URL + "/img/" +
            String(carname).toLowerCase() +
            ".jpg"
          }
          width="150px"
          height="150px"
          style={{ objectFit: "cover" }}
          alt={carname}
        />
      </div>
      <div className="">
        <div className="p-2">
          <h5 className="">{carname}</h5>
          <p className="">Ended at {enddate}</p>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
