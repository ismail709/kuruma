import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        credentials: "include",
    }),
    endpoints: (build) => ({
        getUser: build.query({
            query: () => "/user",
        }),
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
        logOut: build.mutation({
            query: () => ({
                url: "/logout",
                method: "POST",
            }),
        }),
    }),
});

export const {
    useGetUserQuery,
    useLogInMutation,
    useAddUserMutation,
    useUpdateUserMutation,
    useLogOutMutation,
} = userApi;
