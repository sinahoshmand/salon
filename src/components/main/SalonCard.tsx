"use client";

import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { BiBuildings } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
 

export default function SalonCard() {
  return (
    <div className="
    group
    flex
    flex-col
    rounded-[16px]
    bg-[var(--surface)]
    border
    border-transparent
    shadow-md
    transition-all
    duration-300
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:border-[var(--primary)]/20
    hover:shadow-[0_20px_60px_rgba(244,114,182,0.18)]
  ">
      <div className={"relative w-full"}>
        <Image
          width={800}
          height={600}
          className="w-full h-[160px] rounded-t-[13px] object-cover"
          src={"/images/salon1.webp"}
          alt="salon"
        />
        <div
          className={
            "absolute top-2 bg-[var(--bg)] items-center py-1 px-3 rounded-full right-2 flex flex-row gap-2"
          }
        >
          <BsStarFill size={12} color={"var(--champagne-gold)"} />
          <p className=" text-[12px]  ">4.5</p>
        </div>
        <div
          className={
            "absolute top-2 bg-[var(--bg)] items-center py-1 px-3 rounded-full left-2 flex flex-row gap-2"
          }
        >
          <MdVerified size={12} color={"var(--champagne-gold)"} />
          <p className=" text-[12px] ">Verified</p>
        </div>
      </div>
      <div className="p-4 flex flex-col">
        <h2 className="font-bold text-[18px] text-[var(--text)]">
          Luxe Beuty Studio
        </h2>
        <span className="  text-[13px] mt-1 items-center text-[var(--secondary-text)] flex gap-1">
          <BiBuildings size={13} />
          New York,NY
        </span>
        <div className="flex flex-row gap-2 flex-wrap mt-3">
          <div className="bg-[var(--rose-gold)]  py-1 px-2 shadow-sm rounded-[8px]">
            <p className="text-[13px]   text-[#ffff]">Hair</p>
          </div>
          <div className="bg-[var(--rose-gold)]   py-1 px-2 shadow-sm rounded-[8px]">
            <p className="text-[13px] text-[#ffff]">Makeup</p>
          </div>
          <div className="bg-[var(--rose-gold)]   py-1 px-2 shadow-sm rounded-[8px]">
            <p className="text-[13px] text-[#ffff]">Nails</p>
          </div>
        </div>
        <Link
          className="w-full bg-[var(--primary)] 
                 rounded-[10px] transition-all duration-150 mt-4 hover:bg-[var(--primary-hover)] 
                 py-1.5 text-center text-[14px]   text-[#ffff]"
          href={""}
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
