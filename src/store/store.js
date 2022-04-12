import { configureStore } from "@reduxjs/toolkit";
import { carApi } from "../api/car";
import { userApi } from "../api/user";
import { mapSlice } from "../slices/map";
import { tripSlice } from "../slices/trip";
import { userSlice } from "../slices/user";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [mapSlice.name]: mapSlice.reducer,
        [tripSlice.name]: tripSlice.reducer,
        [carApi.reducerPath]: carApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(carApi.middleware)
            .concat(userApi.middleware),
});
