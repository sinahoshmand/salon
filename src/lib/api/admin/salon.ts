import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
 
export async function getSalon(id : string) {
    const session = await getServerSession(authOptions);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/admin/salons/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: session?.accessToken
          ? `Bearer ${session.accessToken}`
          : "",
        },
        cache : "no-store"
      }
    );
   
    if(res.status === 401){
        return "not-allowed"
    }
  
    if (!res.ok) {
      return null;
    }
  
    return res.json();
  }