"use client";

import { TbStars } from "react-icons/tb";
import BreadCrumb from "../ui/BreadCrumb";
import { MdCheckCircle, MdMail } from "react-icons/md";
import { Link } from "@/src/i18n/navigation";
import { BsArrowRight, BsPhone } from "react-icons/bs";
import { PiPhoneCall } from "react-icons/pi";
import { FaMarker, FaStore } from "react-icons/fa6";
import { FaMapMarker, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Header() {
  return (
    <section className="contact-us-bg py-13">
      <div className="container-c mt-20 grid grid-cols-12 gap-5">
        <div className="col-span-4 ">
        <BreadCrumb
            items={[{ label: "Home", href: "/" }, { label: "contact" }]}
          />
           <div className="border max-w-max mt-7 border-[var(--primary)]  rounded-full py-1 px-3">
              <p className="flex justify-start gap-3 items-center  text-[12px] text-[var(--primary)] font-bold">
                 We're Here for you
                <TbStars color="var(--champagne-gold)" size={13} />
              </p>
            </div>
          <h1 className="text-[45px] text-[var(--text)]  font-bold mt-2">
             Contact <span className="text-[var(--primary)]">Us</span>
          </h1>
          
          <p className="text-[15px]  text-[var(--secondary-text)] leading-6 mt-2">
             We're here to help you find the perfect beauty experience Feel free to contact us anytime.
          </p>
          <div className="flex flex-col mt-6 gap-3  w-full">
            <li className="text-[var(--secondary-text)]  text-[13px] gap-2 flex items-center">
              <MdCheckCircle color="var(--primary)"  className="shrink-0" size={19} />
               Fast Support
            </li>
            <li className="text-[var(--secondary-text)] text-[13px] gap-2 flex items-center">
              <MdCheckCircle color="var(--primary)" className="shrink-0" size={19} />
               Friendly Team
            </li>
            <li className="text-[var(--secondary-text)] text-[13px] gap-2 flex items-center">
              <MdCheckCircle color="var(--primary)" className="shrink-0" size={19} />
               24/7 Response
            </li>
            
               <div className="flex flex-row gap-3">
                
            <Link href={'#'} className="px-5 mt-3 mb-3 justify-center py-3 text-[var(--surface)] 
            items-center   flex text-[14px] gap-2 scale-100 hover:scale-105 transition-all duration-300
             rounded-[10px] bg-[var(--primary)]">
                   Call Now
                  <PiPhoneCall color="var(--surface)" size={18}/>
            </Link>

            
            <Link href={'/salons'} className="px-5 mt-3 mb-3 justify-center py-2 text-[var(--surface)] 
            items-center  flex text-[14px] gap-2 scale-100 hover:scale-105 transition-all duration-300
             rounded-[10px] bg-[var(--primary)]">
                   View Salons
                  <FaStore color="var(--surface)" size={18}/>
            </Link>

               </div>
          </div>
        </div>
        <div className="col-span-5 ">
         
        </div>
        <div className="col-span-3">
           <div className="bg-[var(--surface)] rounded-[12px] shadow-md p-6 mt-8">
                <p className="text-[var(--text)] font-bold text-[15px]">Get In Touch</p>
                {/* items */}
                <div className="flex flex-row gap-3 items-center mt-6">
                   <div className="w-[60px] h-[60px] p-2 flex items-center justify-center
                    rounded-full bg-[var(--primary)]/20">
                        <FaPhone color="var(--primary)" size={20}/>
                        
                   </div>
                   <div className="flex flex-col gap-1.5">
                              <p className="text-[var(--text)] font-bold text-[15px]">Phone</p>
                              <p className="text-[var(--secondary-text)] font-bold text-[13px]">+1 (234) 567-8990</p>
                        </div>

                </div>
                <div className="w-full h-[2px] bg-[var(--border)] mt-4"></div>
                {/* items */}
                <div className="flex flex-row gap-3 items-center mt-6">
                   <div className="w-[60px] h-[60px] p-2 flex items-center justify-center
                    rounded-full bg-[var(--primary)]/20">
                        <MdMail color="var(--primary)" size={30}/>
                        
                   </div>
                   <div className="flex flex-col gap-1.5">
                              <p className="text-[var(--text)] font-bold text-[15px]">Email</p>
                              <p className="text-[var(--secondary-text)] font-bold text-[13px]">support@beauty.com</p>
                        </div>

                </div>
                
                 
           </div>
        </div>
      </div>
    </section>
  );
}
