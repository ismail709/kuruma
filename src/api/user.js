import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "./baseUrl";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        logIn: build.mutation({
            query: (user) => ({
                url: "/login",
                method: "POST",
                body: user,
            }),
        }),
        addUser: build.mutation({
            query: (user) => ({
                url: "/signup",
                method: "POST",
                body: user,
            }),
        }),
        updateUser: build.mutation({
            query: (user) => ({
                url: `/user/${user.id}`,
                method: "UPDATE",
                body: user,
            }),
        }),
    }),
});

export const { useLogInMutation, useAddUserMutation, useUpdateUserMutation } =
    userApi;
