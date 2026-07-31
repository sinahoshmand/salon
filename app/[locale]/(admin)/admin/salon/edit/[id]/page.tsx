import EditForm from "@/src/components/admin/salon/EditForm";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";
 
import { Metadata } from "next";
 
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

  return (
    <section>
      <BreadCrumb
        title="ویرایش سالن"
        activePage="ویرایش سالن"
        prevPage={"سالن ها"}
        href="/admin/salon"
      />
      <Card>
          <EditForm id={id}/>
      </Card>
    </section>
  );
}
