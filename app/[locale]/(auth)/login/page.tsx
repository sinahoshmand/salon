"use client"

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";

export default function Page(){
 

    return(
        <button 
        onClick={() => {
            signIn("google")
 
        }}
        className="px-5 py-3 bg-blue-600 text-white">
             google
        </button>
    )
}