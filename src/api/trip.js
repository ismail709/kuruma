import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const tripApi = createApi({
    reducerPath: "tripApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (build) => ({
        getTrips: build.query({
            query: () => `/trips/${user_id}`,
        }),
        addTrip: build.mutation({
            query: (trip) => ({
                url: "/trip",
                method: "POST",
                body: trip,
            }),
        }),
        updateTrip: build.mutation({
            query: (trip) => ({
                url: `/trip/${id}`,
                method: "UPDATE",
                body: trip,
            }),
        }),
    }),
});

export const { useGetTripsQuery, useAddTripMutation, useUpdateTripMutation } =
    tripApi;
