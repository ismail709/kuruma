import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
    name: "map",
    initialState: { lng: -6.8318, lat: 34.0206, zoom: 13, map: false },
    reducers: {
        setLng: (state, action) => {
            state.lng = action.payload;
        },
        setLat: (state, action) => {
            state.lat = action.payload;
        },
        setZoom: (state, action) => {
            state.zoom = action.payload;
        },
        setMap: (state, action) => {
            if (!state.map) {
                state.map = action.payload;
            }
        },
    },
});

export const { setLng, setLat, setZoom, setMap } = mapSlice.actions;
