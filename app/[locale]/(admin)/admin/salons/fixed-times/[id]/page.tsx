import Table from "@/src/components/admin/salons/fixed-price/Table";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("breadcrumb");
  return {
    title: t("define_working_hours"),
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations("breadcrumb");

  return (
    <section>
      <BreadCrumb
        title={t("define_working_hours")}
        activePage={t("define_working_hours")}
        prevPage={t("salon_details")}
        href={"/admin/salons/detail/" + id}
      />
      <Card>
         <Table salon_id={id}/>
      </Card>
    </section>
  );
}
