import Table from "@/src/components/admin/salons/services/reservation/Table";
import BreadCrumb from "@/src/components/admin/ui/BreadCrumb";
import Card from "@/src/components/admin/ui/Card";


export async function generateMetadata(){
 
  return{
     title :'لیست تاریخ های رزرو'
  }
} 




export default async function Page({params} :{ params: Promise<{ service_id: string , id :string }>} ){

    const {service_id , id} = await params;

    return(
        <section>
      <BreadCrumb
        title={'لیست تاریخ های رزرو'}
        activePage={'لیست تاریخ های رزرو'}
        prevPage={'جزئیات'}
        href={"/admin/salons/detail/" + id}
      />
      <Card>
           <Table service_id={service_id} salon_id={id}/>
      </Card>
    </section>
    )
}