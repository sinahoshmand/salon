 
import EditForm from "@/src/components/admin/services/EditForm";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";
 
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
 
type Prop = {
    params : {
        id : number
    }
}

export const metadata: Metadata = {
  title: "ویرایش سالن",
};

export default async function Edit({params} :Prop ) {
  const { id } = await params;
  const t = await getTranslations('admin-main-services');
  return (
    <section>
      <BreadCrumb
        title={t('edit')}
        activePage={t('edit')}
        prevPage={t('title')}
        href="/admin/salon"
      />
      <Card>
          <EditForm id={id}/>
      </Card>
    </section>
  );
}
