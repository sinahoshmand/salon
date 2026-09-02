 
import EditForm from "@/src/components/admin/salons/staff/EditForm";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";
 
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
 
type Prop = {
    params : {
        id : string,
        staff_id : string
    }
}

export async function generateMetadata(){
  const t = await getTranslations('admin-main-salon-pending');
  return{
     title :t('edit')
  }
} 

export default async function Edit({params} :Prop ) {
  const { id , staff_id } = await params;
  const t = await getTranslations('admin-main-salon-pending');
  return (
    <section>
      <BreadCrumb
        title={'ویرایش کارکنان'}
        activePage={'ویرایش کارکنان'}
        prevPage={'جزئیات سالن'}
        href={"/admin/salons/detail/"+id}
      />
      <Card>
          <EditForm salon_id={id} id={staff_id}/>
      </Card>
    </section>
  );
}
