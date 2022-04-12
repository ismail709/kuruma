import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { LogIn, UpdateUser } from "../slices/user";
import { BASE_URL } from "./baseUrl";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        getUser: build.mutation({
            query: (user) => ({
                url: "/signin",
                method: "POST",
                body: user,
            }),
            async onQueryStarted(body, { dispatch, queryFulfilled }) {
                console.log("inside on query started", body);
                queryFulfilled.then((res) => {
                    console.log(res);
                });
            },
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

export const { useGetUserMutation, useAddUserMutation, useUpdateUserMutation } =
    userApi;
