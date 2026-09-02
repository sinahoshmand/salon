import EditForm from "@/src/components/admin/salons/EditForm";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";
 
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
 
type Prop = {
    params : {
        id : number
    }
}

export async function generateMetadata(){
  const t = await getTranslations('admin-main-salon-pending');
  return{
     title :t('edit')
  }
} 

export default async function Edit({params} :Prop ) {
  const { id } = await params;
  const t = await getTranslations('admin-main-salon-pending');
  return (
    <section>
      <BreadCrumb
        title={t('edit')}
        activePage={t('edit')}
        prevPage={t('title')}
        href="/admin/salons"
      />
      <Card>
          <EditForm id={id}/>
      </Card>
    </section>
  );
}
