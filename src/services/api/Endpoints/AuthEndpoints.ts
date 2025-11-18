import baseApi from "../baseApi";
import {
    LoginBody,
    RegisterBody,
    UserResponse,
} from "./../../../types/Auth.type";

const AuthEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginBody>({
      query: (loginBody) => ({
        url: "auth/login",
        method: "POST",
        body: loginBody,
      }),
    }),
    register: builder.mutation<UserResponse, RegisterBody>({
      query: (registerBody) => ({
        url: "auth/register",
        method: "POST",
        body: registerBody,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = AuthEndpoints;
