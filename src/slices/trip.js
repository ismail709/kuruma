import { createSlice } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
    name: "trip",
    initialState: {},
    reducers: {
        setCarId: (state, action) => {
            state.carid = action.payload;
        },
        setStartdate: (state, action) => {
            state.startdate = action.payload;
        },
        setStarttime: (state, action) => {
            state.starttime = action.payload;
        },
        setEnddate: (state, action) => {
            state.enddate = action.payload;
        },
        setEndtime: (state, action) => {
            state.endtime = action.payload;
        },
        setTripActive: (state, action) => {
            state.isActive = action.payload;
        },
    },
});

export const {
    setCarId,
    setStartdate,
    setStarttime,
    setEnddate,
    setEndtime,
    setTripActive,
} = tripSlice.actions;
