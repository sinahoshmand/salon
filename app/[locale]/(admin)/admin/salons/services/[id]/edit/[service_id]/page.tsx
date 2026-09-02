import EditForm from "@/src/components/admin/salons/services/EditForm";
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
  


export default async function Page({params} : {  params: Promise<{ service_id: string , id :string }>;}) {

    const {service_id , id} = await params;

  const t = await getTranslations('admin-main-salon-pending');

  return (
    <section>
      <BreadCrumb
        title={'ویرایش سرویس'}
        activePage={'ویرایش سرویس'}
        prevPage={'سرویس سالن'}
        href={"/admin/salons/services/"+id}
      />
      <Card>
            <EditForm id={service_id} salon_id={id}/>
      </Card>
    </section>
  );
}
