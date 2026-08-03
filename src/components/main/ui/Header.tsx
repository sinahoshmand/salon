"use client";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Menu from "./Menu";
import Filter from "../Header/Filter";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { hover } from "motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Header() {

  const section = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    gsap.fromTo(
      section.current,
      {
        scale : 3,
        opacity: 0,
      },
      
      {
        scale : 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 30%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);


   return (
    <section className="header-bg w-full relative  pb-20">
        
      <div className="container-c h-full">
        <div className="grid grid-cols-12 gap-5 ">
          <div className="col-span-5">
            <div
            ref={section}
              className="
              mt-28
              z-20
         opacity-85
        
    relative
    overflow-hidden
    rounded-[32px]
    border border-white/30
    bg-[var(--bg)]/70
    backdrop-blur-[30px]
    shadow-[0_15px_80px_rgba(255,255,255,.15),0_25px_80px_rgba(0,0,0,.12)]
    px-8
    py-10
  "
            >
              <div className="flex flex-col ">
                <div
                  className="border-[var(--primary)]/70 max-w-max border-1 flex flex-row gap-2 
                items-center rounded-[30px] px-3 py-2"
                >
                  <FaStar color="var(--primary)" size={13} />
                  <p className="text-[var(--primary)]  text-[13px]">
                    Your Beauty , Our Priority
                  </p>
                </div>
                <h1 className="text-[var(--text)] mt-3 text-[40px] font-bold">
                  Book Your Beauty
                </h1>
                <h2 className="text-[var(--text)] text-[40px] font-bold">
                  Appointment
                  <span className="text-[var(--primary)]"> in Secounds</span>
                </h2>
                <p className="  max-w-max mt-3 text-[var(--text)] text-[16px] leading-9">
                  Your beauty, your moment. Schedule your appointment and enjoy
                  a personalized salon experience crafted just for you.
                </p>
              </div>
              <div className="flex flex-row gap-5 mt-6">
                <button
                  className=" px-5 text-[15px] py-3.5
              rounded-[12px]
               scale-100
               hover:scale-110
              items-center
              bg-[var(--primary)]
              text-white
              font-medium
              transition
              hover:opacity-90 flex gap-3"
                >
                  Book Now
                  <BsArrowRight color={"var(--bg)"} size={16} />
                </button>
                <button
                  className=" px-5 text-[15px] py-3.5
              rounded-[12px]
              items-center
              border-2
               scale-100
               hover:scale-110
              border-[var(--primary)]
              text-[var(--primary)]
              font-bold
              transition
              hover:opacity-90 flex gap-3"
                >
                  Explore Salons
                  <BsArrowRight color={"var(--primary)"} size={16} />
                </button>
              </div>
              <div className="flex flex-row gap-4 items-center mt-10">
                <div className="flex">
                  <Image
                    unoptimized
                    alt="customer"
                    className="rounded-full border-3 border-[var(--bg)] w-[40px] h-[40px]"
                    width={50}
                    height={50}
                    src={"/images/profile.jpg"}
                  />
                  <Image
                    unoptimized
                    alt="customer"
                    className="rounded-full -ml-4 border-3 border-[var(--bg)] w-[40px] h-[40px]"
                    width={50}
                    height={50}
                    src={"/images/profile.jpg"}
                  />
                  <Image
                    unoptimized
                    alt="customer"
                    className="rounded-full -ml-4 border-3 border-[var(--bg)] w-[40px] h-[40px]"
                    width={50}
                    height={50}
                    src={"/images/profile.jpg"}
                  />
                  <Image
                    unoptimized
                    alt="customer"
                    className="rounded-full -ml-4 border-3 border-[var(--bg)] w-[40px] h-[40px]"
                    width={50}
                    height={50}
                    src={"/images/profile.jpg"}
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold text-[var(--text)] text-[18px]">
                    20k+
                  </p>
                  <p className="font-bold text-[var(--secondary-text)] text-[16px]">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">

          </div>
          <div className="col-span-4">
              <Filter/>
          </div>
        </div>
      </div>
    </section>
  );
}
