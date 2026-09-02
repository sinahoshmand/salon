export default async function getServiceInfo(locale : string , slug : string) {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/main/service/reservation/${slug}?lang=${locale}`,
        {
          headers: {
            Accept: "application/json",
          },
          cache : "no-store"
        }
      );

      if (!res.ok) {
         console.log("there is an error fetching single salon data")
         return null
      }
    
      return res.json();
    
}