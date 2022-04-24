import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
const tripApi = createApi({
    reducerPath: "trip",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (build) => ({
        getTrips: build.query({
            query: (user_id) => `/trips/${user_id}`,
        }),
        addTrip: build.mutation({
            query: (trip) => ({
                url: "/trips",
                method: "POST",
                body: trip,
            }),
        }),
        updateTrip: build.mutation({
            query: (trip) => ({
                url: `/trips/${trip._id}`,
                method: "UPDATE",
                body: trip,
            }),
        }),
    }),
});

export const { useGetTripsQuery, useAddTripMutation, useUpdateTripMutation } =
    tripApi;
