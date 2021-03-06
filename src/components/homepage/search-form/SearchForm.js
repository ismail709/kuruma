import React, { useEffect, useMemo, useState } from "react";

import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "../../common/css/mapbox-gl-geocoder.css";
import { useNavigate } from "react-router-dom";

import SearchCarSchema from "../../../helpers/schema-validation/SearchCarSchema";

function SearchForm() {
  const [form, setForm] = useState(null);
  const navigate = useNavigate();

  const geocoder = useMemo(
    () =>
      new MapboxGeocoder({
        accessToken:
          "pk.eyJ1IjoiaXNtYWlsMjAyMjMwMyIsImEiOiJjbDF1cXBsNGsyOWgyM2xwZDBscnd5ZTB1In0.gELRjftbCOC7kltK8KLiVQ",
      }),
    []
  );

  useEffect(() => {
    if (document.querySelector("#geocoder").children.length === 0) {
      geocoder.addTo("#geocoder");
    }
    geocoder.on("result", (res) => {
      setForm({ ...form, coordinates: res.result.center });
    });
  }, [geocoder, form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    if (form.error) delete form.error;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(form);
    if (form.startdate && form.starttime && form.enddate && form.endtime) {
      await SearchCarSchema
        .validate({
          coordinates: form?.coordinates,
          start: new Date(form?.startdate + " " + form?.starttime),
          end: new Date(form?.enddate + " " + form?.endtime),
        })
        .then((val) => {
          navigate("/app", { state: form });
        })
        .catch((err) => {
          setForm({ ...form, error: err.errors });
        });
    }
  };

  return (
    <form className="w-100 p-4">
      <div className="row text-start">
        {form?.error && (
          <div className="alert alert-warning" role="alert">
            {form.error}
          </div>
        )}
        <label htmlFor="location" className="form-label col-12 p-0">
          LOCATION
        </label>
        <div className="input-group mb-3 col-12 p-0" id="geocoder" />
        <label htmlFor="start" className="form-label col-12 p-0">
          START
        </label>
        <div className="input-group mb-3 col-12 p-0">
          <div className="input-group-text">
            <i className="bi bi-calendar-week"></i>
          </div>
          <input
            type="date"
            className="form-control"
            id="startdate"
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
        <label htmlFor="start" className="form-label col-12 p-0">
          END
        </label>
        <div className="input-group mb-3 col-12 p-0">
          <div className="input-group-text">
            <i className="bi bi-calendar-week"></i>
          </div>
          <input
            type="date"
            className="form-control"
            id="enddate"
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
        <div className="col-12 p-0">
          <button
            onClick={handleClick}
            className="btn mybtn w-100 p-2 btntxt boldtxt"
          >
            Search Cars
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
