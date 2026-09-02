import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Main from "@/src/components/admin/salons/detail/Main";
import { getSalon } from "@/src/lib/api/admin/salon";
 

import { notFound } from "next/navigation";

export async function generateMetadata({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params;
  
    const salon = await getSalon(id);
  
    return {
      title: salon?.data?.name ?? "جزئیات سالن",
    };
  }

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  let auth: boolean = true;
  const { id } = await params;

  const salon = await getSalon(id);

  if (!salon) return notFound();

  if (salon === "not-allowed") {
    auth = false;
  }

  return (
    <section>
      <BreadCrumb
        title={salon?.data?.name}
        activePage={salon?.data?.name}
        prevPage={"سالن ها"}
        href="/admin/salons"
      />
      <Main data={salon?.data} auth={auth} />
    </section>
  );
}
