import Table from "@/src/components/admin/services/Table";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";
 
 
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(){
  const t = await getTranslations('admin-main-services');
  return{
     title :t('title')
  }
}

export default async function Page() {
  const t = await getTranslations('admin-main-services');
  return (
    <section>
      <BreadCrumb title={t('title')} activePage={t('title')} />
      <Card>
         <Table/>
      </Card>
    </section>
  );
}
