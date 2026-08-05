"use client";

import { Link } from "@/src/i18n/navigation";
import { FaCalendar } from "react-icons/fa";
import { TbCalendarEvent } from "react-icons/tb";

export default function NeedHelp() {
  return (
    <div
      className="grid grid-cols-12 small-sec-pic gap-5 rounded-[10px] 
           border border-[var(--border)] px-10 py-6 mb-10"
    >
      <div className="col-span-7">
        <div className="flex flex-row gap-7 items-center">
          <div className="bg-[var(--rose-gold)]/40 p-5 rounded-full">
            <TbCalendarEvent color="var(--primary)" size={40} />
          </div>
          <div className="flex flex-col">
            <p className="text-[20px] text-[var(--text)] mb-1.5 font-bold">
              Cant Find A Perfect Salon ?
            </p>
            <p className="text-[15px] text-[var(--secondary-text)] mb-1.5  ">
              Let us help you find the best salon for your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-5 flex justify-end items-center">
        <Link href={'#'}
          className=" max-w-max block text-center bg-[var(--primary)] hover:bg-[var(--rose-gold)] 
               text-[15px] text-[var(--bg)] transition-all duration-300 px-6 py-3 rounded-[10px] mt-5"
        >
          Get Help Now
        </Link>
      </div>
       
    </div>
  );
}
