import BreadCrumb from "@/src/components/main/ui/BreadCrumb";

export default function Salons() {
  return (
    <section className="w-full relative">
    <div className="  salon-bg py-7">
      <div className="container-c mt-28 grid grid-cols-12 gap-5">
          <div className="col-span-5">
           <BreadCrumb prev="Home" active="salons"/>
          <h1 className="text-[45px] text-[var(--text)]  font-bold mt-5">OurSalons</h1>
          <p className="text-[15px] text-[var(--secondary-text)] leading-6 mt-1">
              Discover the perfect beauty salon for your next appointment. 
              Browse trusted professionals, compare services, and book with confidence.
          </p>
           </div>
           <div className="col-span-7">
               {/* // */}
           </div>
         </div>
      </div>
      <div className="container-c mt-15 mb-15">
             <div className="grid grid-cols-12">
                 <div className="col-span-4">awd</div>
                 <div className="col-span-8">awd</div>
             </div>
      </div>
    </section>
  );
}
