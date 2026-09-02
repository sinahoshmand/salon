"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 

type Prop = {
  children: ReactNode;
};

export default function MainProvider({ children }: Prop) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          {children} 
        </SessionProvider>
      </QueryClientProvider>
    </Provider>
  );
}
