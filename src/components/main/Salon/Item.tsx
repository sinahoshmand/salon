"use client";

import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { FaListAlt, FaStar } from "react-icons/fa";
import { FaList } from "react-icons/fa6";

export default function Item() {
  return (
    <div className="flex flex-col mt-6">
      <div className="bg-[var(--surface)] hover:shadow-[0_0_10px_var(--primary)] shadow-sm transition-all scale-100 
      hover:scale-102 duration-300 hover:border-[var(--primary)] 
      border border-[var(--border)] rounded-[10px] p-2">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4">
            <Image
              src={"/images/salon.jpg"}
              className="rounded-[10px] object-cover w-[290px] h-[210px]"
              width={800}
              height={600}
              alt="item"
            />
          </div>
          <div className="col-span-5">
            <div className="flex flex-col mt-3">
              <Link href={"#"}>
                <h2
                  className="text-[var(--text)] 
                          transition-all duration-300 hover:text-[var(--primary)] 
                          font-bold text-[22px]"
                >
                  Luxe Beuty Studio
                </h2>
              </Link>
              <div className="flex flex-row gap-2 mt-3 items-center">
                <span className="text-[13px] text-[var(--secondary-text)] font-semibold">
                  5.0
                </span>
                <div className="flex flex-row gap-1 items-center">
                  <FaStar color="gold" size={17} />
                  <FaStar color="gold" size={17} />
                  <FaStar color="gold" size={17} />
                  <FaStar color="gold" size={17} />
                  <FaStar color="gold" size={17} />
                </div>
                <span className="text-[13px] text-[var(--secondary-text)] font-semibold">
                  (324 Reviews)
                </span>
              </div>
              <p
                className="text-[var(--text)] mt-3 
                            text-[15px]"
              >
                Apartment 14B, 425 Lexington Avenue
              </p>
              <div className="flex flex-row gap-2 flex-wrap mt-3">
                <div className="bg-[var(--rose-gold)]/20  py-1 px-3 shadow-sm rounded-[8px]">
                  <p className="text-[13px]   text-[var(--primary)]">Hair</p>
                </div>
                <div className="bg-[var(--rose-gold)]/20   py-1 px-3 shadow-sm rounded-[8px]">
                  <p className="text-[13px]  text-[var(--primary)]">Makeup</p>
                </div>
                <div className="bg-[var(--rose-gold)]/20   py-1 px-3 shadow-sm rounded-[8px]">
                  <p className="text-[13px]  text-[var(--primary)]">Nails</p>
                </div>
                <div className="bg-[var(--rose-gold)]/20   py-1 px-3 shadow-sm rounded-[8px]">
                  <p className="text-[13px]  text-[var(--primary)]">Facial</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 mt-4">
                <div className="flex flex-row gap-2 items-center">
                  <FaList color="var(--primary)" size={13} />
                  <p className="text-[13px]  text-[var(--secondary-text)]">
                    Parking
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <FaList color="var(--primary)" size={13} />
                  <p className="text-[13px]  text-[var(--secondary-text)]">
                    Women Only
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col items-end mt-5 mr-5">
               <p className="text-[14px] mb-1 text-[var(--secondary-text)]   mt-3">
                  Starting From
               </p>
               <strong className="text-[25px] text-right inline-block text-[var(--primary)]">$25</strong>
               <button className="w-full bg-[var(--primary)] hover:bg-[var(--rose-gold)] 
               text-[15px] text-[var(--bg)] transition-all duration-300 px-2 py-3 rounded-[10px] mt-5">
                  Book Appointment
               </button>
          </div>
        </div>
      </div>
    </div>
  );
}
