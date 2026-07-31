import CreateForm from "@/src/components/admin/salon/CreateForm";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "ایجاد دسته بندی ها",
  };
  


export default function Create() {
  return (
    <section>
      <BreadCrumb
        title="ایجاد سالن"
        activePage="ایجاد سالن"
        prevPage={"سالن ها"}
        href="/admin/salon"
      />
      <Card>
         <CreateForm/>
      </Card>
    </section>
  );
}
