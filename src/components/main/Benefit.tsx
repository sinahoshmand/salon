"use client"
import benefits from "@/src/data/benefits";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Benefit() {
  const cards = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    gsap.fromTo(
      cards.current,
      {
        rotate: 30,
        opacity: 0,
        y: 50,
      },
      {
        rotate: 0,
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards.current[0],
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);


  return (
    <section className="container-c grid grid-cols-2 sm:grid-cols-6 gap-4 -mt-10">
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <div
          
          ref={(el) => {
            if (el) cards.current.push(el);
          }}
            key={benefit.id}
            className={` 
             flex flex-col transition-all duration-300 justify-center items-center
             border-1 border-[var(--primary)]/30 hover:border-[var(--primary)]/50
    px-5 py-5
    shadow-[0_15px_80px_rgba(255,255,255,.15),0_25px_80px_rgba(0,0,0,.12)]
    scale-100
    hover:scale-110
    relative
    overflow-hidden
    
    rounded-[15px]
    bg-[var(--bg)]/90
    backdrop-blur-[30px]`}
          >
            <div className="p-5 bg-[var(--primary)]/10   max-w-max rounded-full">
              <Icon color="var(--primary)" size={27} />
            </div>
            <p className="text-[14px] text-[var(--text)]   mb-1 mt-2 text-center">
              {benefit.title}
            </p>
            <p className="text-[12px] text-[var(--secondary-text)]   mb-1 mt-2 text-center">
              {benefit.small}
            </p>
          </div>
        );
      })}
    </section>
  );
}
