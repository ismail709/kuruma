import React, { useEffect, useState } from "react";

import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "./mapbox-gl-geocoder.css";
import mapboxgl from "mapbox-gl";
import { useNavigate } from "react-router-dom";

function Searchform({ full = true, map = null }) {
    const [form, setForm] = useState(null);
    const navigate = useNavigate();

    var geocoder = new MapboxGeocoder({
        accessToken:
            "pk.eyJ1IjoiaXNtYWlsMjAyMjMwMyIsImEiOiJjbDF1cXBsNGsyOWgyM2xwZDBscnd5ZTB1In0.gELRjftbCOC7kltK8KLiVQ",
    });

    useEffect(() => {
        geocoder.addTo("#geocoder");
        geocoder.on("results", (res) => {
            console.log(res.features[0]);
            setForm({ ...form, coordinates: res.features[0].center });
        });
        if (!full) {
            map.addControl(geocoder);
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();

        navigate("/app/search", { state: form });
    };

    return (
        <div className="container-md">
            <form className="form">
                <div className="text-start">
                    {full && (
                        <label htmlFor="location" className="form-label">
                            LOCATION
                        </label>
                    )}
                    <div id="geocoder" />
                    {full && (
                        <>
                            <label htmlFor="start" className="form-label">
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
                                    placeholder="Enter your address"
                                    onChange={handleChange}
                                />
                                <div className="input-group-text">
                                    <i className="bi bi-clock"></i>
                                </div>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="starttime"
                                    name="starttime"
                                    placeholder="Enter your address"
                                    onChange={handleChange}
                                />
                            </div>
                            <label htmlFor="start" className="form-label">
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
                                    placeholder="Enter your address"
                                    onChange={handleChange}
                                />
                                <div className="input-group-text">
                                    <i className="bi bi-clock"></i>
                                </div>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="endtime"
                                    name="endtime"
                                    placeholder="Enter your address"
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                onClick={handleClick}
                                className="btn mybtn w-100 p-2 btntxt boldtxt"
                            >
                                Search Cars
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Searchform;
