 
import CreateForm from "@/src/components/admin/salons/services/CreateForm";
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
  


export default async function Create({params} : {  params: Promise<{ id: string }>;}) {

    const {id} = await params;

  const t = await getTranslations('admin-main-salon-pending');

  return (
    <section>
      <BreadCrumb
        title={'ایجاد سرویس'}
        activePage={'ایجاد سرویس'}
        prevPage={'سرویس سالن'}
        href={"/admin/salons/services/"+id}
      />
      <Card>
            <CreateForm id={id}/>
      </Card>
    </section>
  );
}
