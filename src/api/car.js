import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const carApi = createApi({
    reducerPath: "carApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (build) => ({
        getCars: build.query({
            query: () => "/cars",
        }),
        getCar: build.query({
            query: (id) => `/car/${id}`,
        }),
        updateCar: build.mutation({
            query: (car) => ({
                url: `/car/${car.id}`,
                method: "UPDATE",
                body: car,
            }),
        }),
    }),
});

export const { useGetCarsQuery, useGetCarQuery, useUpdateCarMutation } = carApi;
