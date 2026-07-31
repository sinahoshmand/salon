"use client";

import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { useMemo } from "react";

export function useApi() {
  const { data: session , status } = useSession();

  return useMemo(() => {
    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BACKEND_ADDRESS,
      headers: {
        Authorization: session?.accessToken
          ? `Bearer ${session.accessToken}`
          : "",
         Accept: "application/json",
         "Content-Type" : "application/json",
      }, 
    });

    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
           await signOut({ callbackUrl : '/login' })
        }
        return Promise.reject(error);
      }
    );

    return api;

  }, [session?.accessToken , status]);
}