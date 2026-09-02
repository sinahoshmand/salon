import Table from "@/src/components/admin/salons/services/Table";
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
        title={'مدیریت سرویس سالن'}
        activePage={'مدیریت سرویس سالن'}
        prevPage={"جزئیات سالن"}
        href={"/admin/salons/detail/" + id}
      />
      <Card>
         <Table id={id}/>
      </Card>
    </section>
  );
}
