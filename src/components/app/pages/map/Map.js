import React, { useEffect, useRef, useState } from "react";
import "./search.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCarsQuery } from "../api/car";
import "../components/mapbox-gl-geocoder.css";
import mapboxgl from "mapbox-gl";
import { useDispatch, useSelector } from "react-redux";
import { setLat, setLng, setMap, setZoom } from "../slices/map";
import {
    setCarId,
    setEnddate,
    setEndtime,
    setStartdate,
    setStarttime,
} from "../slices/trip.js";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { BASE_URL } from "../api/baseUrl";

function Map() {
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [Car, setCar] = useState({});

    const map = useRef(null);
    const mapContainer = useRef(null);

    const mapstate = useSelector((state) => state.map.map);
    const { lng, lat, zoom } = useSelector((state) => state.map);
    const { data, isSuccess } = useGetCarsQuery();
    // trip info
    const startdate = useRef(null);
    const starttime = useRef(null);
    const enddate = useRef(null);
    const endtime = useRef(null);

    //handle book car click event
    const handleBookCar = () => {
        dispatch(setStartdate(startdate.current.value));
        dispatch(setStarttime(starttime.current.value));
        dispatch(setEnddate(enddate.current.value));
        dispatch(setEndtime(endtime.current.value));
        dispatch(setCarId(Car._id));

        navigate("/app/trip");
    };

    useEffect(() => {
        if (map.current) return;
        mapboxgl.accessToken =
            "pk.eyJ1IjoiaXNtYWlsMjAyMjMwMyIsImEiOiJjbDF1cXBsNGsyOWgyM2xwZDBscnd5ZTB1In0.gELRjftbCOC7kltK8KLiVQ"; // initialize map only once
        if (!mapstate) {
            // if the plugin is already loaded then skip
            mapboxgl.setRTLTextPlugin(
                "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
                null,
                true // Lazy load the plugin
            );
        }
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
        map.current.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
            })
        );

        dispatch(setMap(true)); // the rtlPlugin can't be loaded more than once
    });
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        // go to location provided by the user in the homepage
        if (location.state) {
            map.current.jumpTo({
                center: [
                    location.state.coordinates[0],
                    location.state.coordinates[1],
                ],
            });
            dispatch(setLng(location.state.coordinates[0]));
            dispatch(setLat(location.state.coordinates[1]));
            location.state = null;
        }
        // Add markers to the map.
        if (isSuccess) {
            for (const car of data) {
                // Create a DOM element for each marker.
                const el = document.createElement("div");
                el.innerHTML =
                    '<button type="button" class="w-auto h-auto bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F20089" d="M23.5 7c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202zm-1.441 3.506c.639 1.186.946 2.252.946 3.666 0 1.37-.397 2.533-1.005 3.981v1.847c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1h-13v1c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1.847c-.608-1.448-1.005-2.611-1.005-3.981 0-1.414.307-2.48.946-3.666.829-1.537 1.851-3.453 2.93-5.252.828-1.382 1.262-1.707 2.278-1.889 1.532-.275 2.918-.365 4.851-.365s3.319.09 4.851.365c1.016.182 1.45.507 2.278 1.889 1.079 1.799 2.101 3.715 2.93 5.252zm-16.059 2.994c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm10 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm2.941-5.527s-.74-1.826-1.631-3.142c-.202-.298-.515-.502-.869-.566-1.511-.272-2.835-.359-4.441-.359s-2.93.087-4.441.359c-.354.063-.667.267-.869.566-.891 1.315-1.631 3.142-1.631 3.142 1.64.313 4.309.497 6.941.497s5.301-.184 6.941-.497zm2.059 4.527c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-18.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2z"/></svg></button>';
                el.style.color = "#F20089";
                el.addEventListener("click", () => {
                    setCar(car);
                });
                // Add markers to the map.
                new mapboxgl.Marker(el)
                    .setLngLat([
                        parseFloat(car.coordinates[0]),
                        parseFloat(car.coordinates[1]),
                    ])
                    .addTo(map.current);
            }
        }
        map.current.on("move", () => {
            dispatch(setLng(map.current.getCenter().lng.toFixed(4)));
            dispatch(setLat(map.current.getCenter().lat.toFixed(4)));
            dispatch(setZoom(map.current.getZoom().toFixed(2)));
        });
    });

    return (
        <div className="container-fluid h-100 p-0">
            <div ref={mapContainer} className="map"></div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="d-flex flex-column align-items-center">
                                <div className="d-flex flex-row gap-2">
                                    <img
                                        src={
                                            BASE_URL + "/img/" +
                                            String(Car.name).toLowerCase() +
                                            ".jpg"
                                        }
                                        className="mycarimg col-4"
                                        alt={Car.name}
                                    />
                                    <div className="col-8">
                                        <div className="d-flex flex-column">
                                            <h2>{Car.name}</h2>
                                            <h4 className="text-muted">
                                                Cost : {Car.cost}$/hr
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-md">
                                    <form className="form">
                                        <div className="text-start">
                                            <label
                                                htmlFor="start"
                                                className="form-label"
                                            >
                                                START
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-text">
                                                    <i className="bi bi-calendar-week"></i>
                                                </div>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="start"
                                                    name="startdate"
                                                    ref={startdate}
                                                />
                                                <div className="input-group-text">
                                                    <i className="bi bi-clock"></i>
                                                </div>
                                                <input
                                                    type="time"
                                                    className="form-control"
                                                    id="starttime"
                                                    name="starttime"
                                                    ref={starttime}
                                                />
                                            </div>
                                            <label
                                                htmlFor="start"
                                                className="form-label"
                                            >
                                                END
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-text">
                                                    <i className="bi bi-calendar-week"></i>
                                                </div>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="end"
                                                    name="enddate"
                                                    ref={enddate}
                                                />
                                                <div className="input-group-text">
                                                    <i className="bi bi-clock"></i>
                                                </div>
                                                <input
                                                    type="time"
                                                    className="form-control"
                                                    id="endtime"
                                                    name="endtime"
                                                    ref={endtime}
                                                />
                                            </div>
                                            <input
                                                type="button"
                                                value="Book Car"
                                                className="btn mybtn w-100 p-2 btntxt boldtxt"
                                                onClick={handleBookCar}
                                                data-bs-dismiss="modal"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
