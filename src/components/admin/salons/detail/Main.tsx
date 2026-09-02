"use client";
import { signOut } from "next-auth/react";
import Card from "../../ui/Card";
import Data from "@/src/types/single-salon.type";
import { useEffect } from "react";
import Header from "./Header";
import Manage from "./Manage";

type Props = {
  data: Data;
  auth: boolean;
};

export default function Main({ data, auth }: Props) {
  
    useEffect(() => {
        if (!auth) {
          signOut({
            callbackUrl: "/login",
          });
        }
      }, [auth]);

  return (
    <section>
      <Header data={data}/>
      <Manage data={data}/>
    </section>
  );
}
