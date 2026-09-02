import Form from "@/src/components/main/service/reserve/Form";
import { Link } from "@/src/i18n/navigation";
import getServiceInfo from "@/src/lib/api/single-salon/service/getServiceInfo";
import { FaArrowLeft } from "react-icons/fa";

export async function generateMetadata() {
   
   
    return {
      title: 'Reserve Service',
      description: '',
      
    };
  }

export default async function Page({params} : {params : Promise<{slug : string , locale : string}>}){

    const {slug , locale} = await params;
    const serviceData = await getServiceInfo(locale , slug)

    return(
       <section className=" explain-bg">
             <div className="container-c p-8 pt-30">
                 <div className="grid grid-cols-12 gap-8 mt-10">
                    <div className="col-span-4">
                         <div className="flex flex-col">
                             <Link href={`/salon/${slug}`} className="flex flex-row gap-2 items-center">
                                 <FaArrowLeft color="var(--primary)" size={15}/>
                                 <p className="text-[var(--primary)] text-[14px] font-bold">Back to Salon</p>
                             </Link>
                             <h1 className="text-[var(--text)] text-[40px] mt-5">Book Your Appontment</h1>
                             <p className="text-[var(--text)] text-[16px] mt-5">Easy & fast booking in just</p>
                             <p className="text-[var(--primary)] text-[15px] font-bold mt-2">3 simple steps</p>
                             {/* numbers */}
                             <div className="flex flex-row gap-5 items-center z-20 relative mt-10">
                                <div className="w-19.5 h-[1px] absolute top-15 z-10  -left-3.5 rotate-90 bg-[var(--primary)]"></div>
                                  <div className="p-3 w-[50px] h-[50px] flex items-center justify-center 
                                  bg-[var(--primary)] rounded-full">
                                      <span className="text-[var(--bg)] text-[17px]">1</span>
                                  </div>
                                  <div className="">
                                      <h3 className="text-[var(--text)] text-[17px]  font-bold">Service</h3>
                                      <p className="text-[var(--secondary-text)] text-[15px] ">Choose your service</p>
                                  </div>
                             </div>
                              {/* numbers */}
                              <div className="flex flex-row gap-5 items-center relative mt-12">
                              <div className="w-19.5 h-[1px] absolute top-15  z-10 -left-3.5 rotate-90 bg-[var(--primary)]"></div>
                                  <div className="p-3 w-[50px] h-[50px] flex z-20 items-center justify-center 
                                  bg-gray-300 rounded-full">
                                      <span className="text-[var(--text)] text-[17px]">2</span>
                                  </div>
                                  <div className="">
                                      <h3 className="text-[var(--text)] text-[17px]  font-bold">Date & Time</h3>
                                      <p className="text-[var(--secondary-text)] text-[15px] ">Pick date and time</p>
                                  </div>
                             </div>
                              {/* numbers */}
                              <div className="flex flex-row gap-5 items-center z-20 mt-12">
                                  <div className="p-3 w-[50px] h-[50px] flex items-center justify-center 
                                  bg-gray-300 rounded-full">
                                      <span className="text-[var(--text)] text-[17px]">3</span>
                                  </div>
                                  <div className="">
                                      <h3 className="text-[var(--text)] text-[17px]  font-bold">Details</h3>
                                      <p className="text-[var(--secondary-text)] text-[15px] ">Your information</p>
                                  </div>
                             </div>

                         </div>
                    </div>
                    <div className="col-span-8">
                       <Form data={serviceData?.data}/>
                    </div>
                 </div>
             </div>
       </section>
    )
}