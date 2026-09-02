export async function getCategories(locale : string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/main/services?lang=${locale}`,
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
      throw new Error("Failed to fetch services");
    }
  
    return res.json();
  }