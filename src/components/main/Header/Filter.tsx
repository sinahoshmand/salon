"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { BiCalendarEvent } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { CgChevronRight } from "react-icons/cg";
import { FaMapMarker, FaMapMarkerAlt, FaMarker, FaSearch } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { TbStars } from "react-icons/tb";
gsap.registerPlugin(ScrollTrigger);
export default function Filter() {
  const section = useRef<HTMLHeadingElement>(null);
  const [service, setService] = useState<string>("Hair Styling");
  const [location, setLocation] = useState<string>("New York,NY");
  const [from_date, setDateFrom] = useState<string>("2025/05/25");
  const [to_date, setDateTo] = useState<string>("2025/06/30");
  const [rate, setRate] = useState<number>(4);

  useEffect(() => {
    gsap.fromTo(
      section.current,
      {
        
        opacity: 0,
      },
      
      {
       
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);



  return (
    <div
      ref={section}
      className="
        mt-30
        z-20
    opacity-85
relative
overflow-hidden
rounded-[32px]
border border-white/30
bg-[var(--bg)]/65
backdrop-blur-[30px]
shadow-[0_15px_80px_rgba(255,255,255,.15),0_25px_80px_rgba(0,0,0,.12)]
px-6
py-7
"
    >
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-row gap-2 items-center">
          <TbStars color="var(--champagne-gold)" size={23} />
          <h2 className="text-[var(--text)] text-[18px] font-bold">
            Find Your Perfect Salon
          </h2>
          <TbStars color="var(--champagne-gold)" size={23} />
        </div>
        {/* Button one */}
        <span className="text-[var(--secondary-text)] text-[14px] mt-4">
          Service
        </span>
        <button
          className="w-full bg-[var(--bg)] px-3 py-3.5 items-center rounded-[12px] 
        shadow-sm border border-[var(--border)] flex  justify-between transition-all scale-100 hover:scale-105 gap-3"
        >
          <div className="flex items-center gap-3">
            <MdWork color="var(--primary)" size={23} />
            <span className="text-[14px] font-bold text-[var(--text)]">
              {service}
            </span>
          </div>
          <CgChevronRight color="var(--primary)" size={23} />
        </button>
        {/* Button two */}
        <span className="text-[var(--secondary-text)] text-[14px] mt-2">
          Location
        </span>
        <button
          className="w-full bg-[var(--bg)] px-3 py-3.5 items-center rounded-[12px] 
        shadow-sm border border-[var(--border)] flex  justify-between transition-all scale-100 hover:scale-105 gap-3"
        >
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt color="var(--primary)" size={23} />
            <span className="text-[14px] font-bold text-[var(--text)]">
              {location}
            </span>
          </div>
          <CgChevronRight color="var(--primary)" size={23} />
        </button>
        {/* Button tree */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] text-[var(--secondary-text)]">
              From Date
            </span>

            <button
              className="w-full bg-[var(--bg)] px-4 py-3.5 rounded-[12px]
      border border-[var(--border)] shadow-sm
      flex items-center justify-between
      transition-all duration-200 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <BiCalendarEvent color="var(--primary)" size={22} />
                <span className="text-[14px] font-semibold text-[var(--text)]">
                  {from_date}
                </span>
              </div>

              <CgChevronRight color="var(--primary)" size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[13px] text-[var(--secondary-text)]">
              To Date
            </span>

            <button
              className="w-full bg-[var(--bg)] px-4 py-3.5 rounded-[12px]
      border border-[var(--border)] shadow-sm
      flex items-center justify-between
      transition-all duration-200 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <BiCalendarEvent color="var(--primary)" size={22} />
                <span className="text-[13px] font-semibold text-[var(--text)]">
                  {to_date}
                </span>
              </div>

              <CgChevronRight color="var(--primary)" size={20} />
            </button>
          </div>
        </div>
          {/* Button Four */}
          <span className="text-[var(--secondary-text)] text-[14px] mt-2">
          Rating
        </span>
        <button
          className="w-full bg-[var(--bg)] px-3 py-3.5 items-center rounded-[12px] 
        shadow-sm border border-[var(--border)] flex  justify-between transition-all scale-100 hover:scale-105 gap-3"
        >
          <div className="flex items-center gap-3">
            <BsStar color="var(--primary)" size={23} />
            <span className="text-[14px] font-bold text-[var(--text)]">
              {rate}
            </span>
          </div>
          <CgChevronRight color="var(--primary)" size={23} />
        </button>
        <button className="w-full rounded-[10px] mt-3 flex
         items-center justify-center gap-2 
          transition-all duration-300
          scale-100 hover:scale-106
         bg-[var(--primary)] text-[var(--bg)] py-3 px-3">
               Search Salons
              <FaSearch color="var(--bg)" size={18}/>
        </button>
      </div>
    </div>
  );
}
