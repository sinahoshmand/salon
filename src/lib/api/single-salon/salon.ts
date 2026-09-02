import { notFound } from "next/navigation";

type Props = {
    locale? : string,
    slug : string
}


export default async function getSalon({locale , slug} : Props) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/main/salon/${slug}?lang=${locale}`,
        {
          headers: {
            Accept: "application/json",
          },
          next: {
              revalidate: 60,
            },
        }
      );

      if (!res.ok) {
         console.log("there is an error fetching single salon data")
         return null
      }
    
      return res.json();

}