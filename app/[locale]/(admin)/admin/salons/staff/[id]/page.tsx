 
import Table from "@/src/components/admin/salons/staff/Table";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("admin-main-services");
  return {
    title: t("title"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations("admin-main-menus");
  return (
    <section>
      <BreadCrumb
        title={'مدیریت کارکنان سالن'}
        activePage={'مدیریت کارکنان سالن'}
        prevPage={"کارکنان سالن"}
        href={"/admin/salons/detail/" + id}
      />
      <Card>
         <Table salon_id={id}/>
      </Card>
    </section>
  );
}
