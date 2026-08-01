"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { BsQuote } from "react-icons/bs";

export default function TestimonialCard() {
  return (
    <div className="  bg-[var(--surface)] relative  shadow-md flex gap-4 rounded-[10px]  px-4 py-9">
      <BsQuote
        className={"absolute top-3 text-[var(--primary)]/50"}
        size={30}
      />
      <Image
        alt="profile"
        src={"/images/profile.jpg"}
        className="w-[60px] mt-2 object-cover rounded-full h-[60px]"
        width={80}
        height={80}
      />

      <div className="flex flex-col">
        <div className="flex flex-row gap-5">
          <h3 className={`text-[18px] font-bold text-[var(--text)]`}>
            Emily Jonson
          </h3>
          <div className="flex flex-row items-center gap-1">
            <FaStar color={"gold"} size={18} />
            <FaStar color={"gold"} size={18} />
            <FaStar color={"gold"} size={18} />
            <FaStar color={"gold"} size={18} />
            <FaStar color={"gold"} size={18} />
          </div>
        </div>
        <p className={`text-[13px] mt-2  text-[var(--secondary-text)]`}>
          The all-in-one platform to capture, measure, and showcase customer
          love — testimonials, case studies, NPS, and brand monitoring in one
          place.
        </p>
      </div>
    </div>
  );
}
