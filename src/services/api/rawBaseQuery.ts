import { getToken } from "@/src/store/expo-secure-store";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rawBaseQuery = fetchBaseQuery({
  
  baseUrl: "https://api.mahmoud-osama.com/api/", // <- change to your API base
  prepareHeaders: async (headers) => {
    const token = await getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
