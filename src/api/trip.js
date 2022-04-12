import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "./baseUrl";

const tripApi = createApi({
    reducerPath: "tripApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
