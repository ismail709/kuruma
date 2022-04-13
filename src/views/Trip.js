import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetCarQuery } from "../api/car";
import moment from "moment";

function Trip() {
    const Trip = useSelector((state) => state.trip);
    const { data, isSuccess } = useGetCarQuery(Trip.carid);
    const [carState, setcarState] = useState(null);

    const handleBooking = () => {};

    useEffect(() => {
        if (isSuccess) {
            setcarState(data[0]);
        }
        if (carState) {
            let total = calculateTotal(
                Trip.startdate,
                Trip.starttime,
                Trip.enddate,
                Trip.endtime,
                carState.cost
            );
            setcarState({ ...carState, total });
        }
    });
    if (!Trip.carid)
        return (
            <div className="d-flex flex-column justify-content-center align-items-center fs-3 text-muted h-100">
                Pick a car from the Search
            </div>
        );
    if (!isSuccess) return <h1>Loading...</h1>;
    if (carState)
        return (
            <div className="container-md h-100">
                <div className="d-flex flex-column h-100 justify-content-center">
                    <div className="d-flex flex-column justify-content-center align-items-center w-100 mb-5">
                        <img
                            src={
                                "http://localhost:5000/img/" +
                                carState._id +
                                ".jpg"
                            }
                            className="mycarimg col-4"
                        />

                        <div className="d-inline w-50 h-50 bg-white"></div>
                        <div className="h3 fw-bold">{carState.name}</div>
                    </div>
                    <div className="d-flex flex-column">
                        <dl className="row">
                            <dt className="col-4">Trip starts at</dt>
                            <dd className="col-8 text-end">
                                {Trip.startdate} at {Trip.starttime}
                            </dd>
                            <dt className="col-4">Trip ends at</dt>
                            <dd className="col-8 text-end">
                                {Trip.enddate} at {Trip.endtime}
                            </dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-4">Cost</dt>
                            <dd className="col-8 text-end">
                                {carState.cost}$/hr
                            </dd>
                            <dt className="col-4">Tax</dt>
                            <dd className="col-8 text-end">10%</dd>
                            <dt className="col-4">Total</dt>
                            <dd className="col-8 text-end">
                                {carState.total + carState.total * 0.1}$
                            </dd>
                        </dl>
                        <button
                            className="btn mybtn w-100 p-2 btntxt boldtxt"
                            onClick={handleBooking}
                        >
                            Book a car now
                        </button>
                    </div>
                </div>
            </div>
        );
}

function calculateTotal(startdate, starttime, enddate, endtime, cost) {
    let start = moment(startdate + " " + starttime);
    let end = moment(enddate + " " + endtime);
    return moment.duration(end.diff(start)).asHours() * cost;
}

export default Trip;