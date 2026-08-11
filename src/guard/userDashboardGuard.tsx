"use client"
import { data } from "motion/react-client";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useRouter } from "../i18n/navigation";

export default function UserDashboardGuard({children} : {children : ReactNode}){
   
    const {data : session , status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if(status === "unauthenticated"){
          router.push("/login");
        }
    
        if(
          status === "authenticated" &&
          session?.role !== "customer"
        ){
          router.push("/unauthorized");
        }
    
      }, [status, session, router]);

    return children;
    
}