import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        LogIn: (state, action) => {
            state.user = action.payload;
        },
        UpdateUser: (state, action) => {
            state.user = action.payload;
        },
        LogOut: (state) => {
            state.user = null;
        },
    },
});

export const { LogIn, LogOut, UpdateUser } = userSlice.actions;
