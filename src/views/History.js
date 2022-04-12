import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import TripCard from "../components/TripCard";

function History() {
    useEffect(() => {
        const appbar = document.querySelector("#appbar");
        const historyview = document.querySelector("#historyview");
        historyview.style.height =
            window.innerHeight - appbar.getBoundingClientRect().height + "px";
        window.onresize = () => {
            historyview.style.height =
                window.innerHeight -
                appbar.getBoundingClientRect().height +
                "px";
        };
    });

    return (
        <div className="d-block overflow-scroll" id="historyview">
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
            <TripCard
                carname="Toyota"
                enddate={new Date().getDate() + "/" + new Date().getMonth()}
            />
        </div>
    );
}

export default History;
