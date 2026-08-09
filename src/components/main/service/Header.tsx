"use client";

import BreadCrumb from "../ui/BreadCrumb";

export default function Header() {
  return (
    <section className="service-banner py-13">
      <div className="container-c mt-28 grid grid-cols-12 gap-5">
         <div className="col-span-5">
         <BreadCrumb items={[
                      {label : "Home" , href : "/"},
                      {label : "Services"},
                  ]}/>
                   <h1 className="text-[45px] text-[var(--text)]  font-bold mt-5">Our Main Service</h1>  
                   <p className="text-[15px] text-[var(--secondary-text)] leading-6 mt-1">
            Discover the perfect beauty salon for your next appointment. Browse
            trusted professionals, compare services, and book with confidence.
          </p> 
         </div>
         <div className="col-span-7"></div>
      </div>
    </section>
  );
}
