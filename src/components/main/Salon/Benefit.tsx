"use client"
import { BiCalendarEdit, BiMoney } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
export default function Bnefit(){
    return(
        <div className="grid grid-cols-2 sm:grid-cols-4 shadow-sm rounded-[10px] 
        gap-7 border border-[var(--border)] -mt-4  py-5 px-4  bg-[var(--surface)]">
          {/* items */}
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[70px] h-[70px] flex justify-center items-center bg-[var(--rose-gold)]/30 rounded-full p-4">
              <BsStar color="var(--primary)" size={25} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[var(--text)] font-bold mb-1.5 text-[16px]">
                Trusted & Veridfied Salons
              </h3>
              <p className="text-[var(--secondary-text)] font-bold mb-1.5 text-[13px]">
                All salons are quality checked
              </p>
            </div>
          </div>
          {/* items */}
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[70px] h-[70px] flex justify-center items-center bg-[var(--rose-gold)]/30 rounded-full p-4">
              <BsStar color="var(--primary)" size={25} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[var(--text)] font-bold mb-1.5 text-[16px]">
                Top Rated
              </h3>
              <p className="text-[var(--secondary-text)] font-bold mb-1.5 text-[13px]">
                +4 star salons near you
              </p>
            </div>
          </div>
          {/* items */}
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[70px] h-[70px] flex justify-center items-center bg-[var(--rose-gold)]/30 rounded-full p-4">
              <BiCalendarEdit color="var(--primary)" size={25} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[var(--text)] font-bold mb-1.5 text-[16px]">
                Eeasy Booking
              </h3>
              <p className="text-[var(--secondary-text)] font-bold mb-1.5 text-[13px]">
                Book in just a few clicks
              </p>
            </div>
          </div>
          {/* items */}
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[70px] h-[70px] flex justify-center items-center bg-[var(--rose-gold)]/30 rounded-full p-4">
              <BiMoney color="var(--primary)" size={25} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[var(--text)] font-bold mb-1.5 text-[16px]">
                Best Price
              </h3>
              <p className="text-[var(--secondary-text)] font-bold mb-1.5 text-[13px]">
                get exclusive deals
              </p>
            </div>
          </div>
        </div>
    )
}