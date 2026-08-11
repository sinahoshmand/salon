"use client";

import BreadCrumb from "../ui/BreadCrumb";

export default function Header() {
  return (
    <section className="contact-us-bg py-13">
      <div className="container-c mt-28 grid grid-cols-12 gap-5">
        <div className="col-span-4">
        <BreadCrumb
            items={[{ label: "Home", href: "/" }, { label: "contact" }]}
          />
          <h1 className="text-[45px] text-[var(--text)]  font-bold mt-5">
            Simple Steps,
          </h1>
          <h2 className="text-[45px] text-[var(--primary)]  font-bold ">
            Beautiful Results
          </h2>
          <p className="text-[15px] text-center text-[var(--secondary-text)] leading-6 mt-2">
             BeastBeuty makes booking and managing appointmants easy for everyone
          </p>
        </div>
        <div className="col-span-4 flex items-center flex-col">
         
        </div>
        <div className="col-span-4"></div>
      </div>
    </section>
  );
}
