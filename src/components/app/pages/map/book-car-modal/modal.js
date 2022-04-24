import React, { useEffect } from "react";
import ReactDOM from "react-dom";
function Modal({
    Car,
    startdate,
    starttime,
    enddate,
    endtime,
    handleBookCar,
    setVisible,
}) {
    return ReactDOM.createPortal(
        <>
            <div
                className="position-fixed top-0 left-0 w-100 h-100  bg-dark"
                style={{ zIndex: 1000, opacity: 0.5 }}
                id="backdrop"
            />
            <div
                className="position-fixed top-0 left-0 h-100 w-100 d-flex flex-column justify-content-center align-items-center p-2"
                style={{ zIndex: 1001 }}
            >
                <div
                    className="position-relative d-flex flex-column align-items-center bg-white p-2 rounded"
                    id="modal"
                >
                    <button
                        className="position-absolute border-0 bg-white"
                        style={{ top: "10px", right: "10px" }}
                        onClick={(e) => setVisible(false)}
                    >
                        X
                    </button>
                    <div className="d-flex flex-row gap-2">
                        <img
                            src={
                                "/img/" +
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
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>,
        document.querySelector("#root")
    );
}

export default Modal;
