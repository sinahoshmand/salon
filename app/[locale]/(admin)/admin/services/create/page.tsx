 
import CreateForm from "@/src/components/admin/services/CreateForm";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


 

  export async function generateMetadata(){
    const t = await getTranslations('admin-main-services');
    return{
       title :t('create')
    }
  } 
  


export default async function Create() {

  const t = await getTranslations('admin-main-services');

  return (
    <section>
      <BreadCrumb
        title={t('create')}
        activePage={t('create')}
        prevPage={t('title')}
        href="/admin/services"
      />
      <Card>
          <CreateForm/>
      </Card>
    </section>
  );
}
