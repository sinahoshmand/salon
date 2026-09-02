import CreateForm from "@/src/components/admin/salons/CreateForm";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


 

  export async function generateMetadata(){
    const t = await getTranslations('admin-main-salon-pending');
    return{
       title :t('create')
    }
  } 
  


export default async function Create() {

  const t = await getTranslations('admin-main-salon-pending');

  return (
    <section>
      <BreadCrumb
        title={t('create')}
        activePage={t('create')}
        prevPage={t('title')}
        href="/admin/salons"
      />
      <Card>
          <CreateForm/>
      </Card>
    </section>
  );
}
