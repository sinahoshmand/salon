"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionTitle from "./ui/SectionTitle";
import ServiceStep from "./ui/ServiceStep";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Explain() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".slide");

      if (!slides.length) return;

      gsap.set(slides, {
        xPercent: 100,
        opacity: 0,
        zIndex: 10,
      });

      gsap.set(slides[0], {
        xPercent: 0,
        opacity: 1,
      });

      gsap.set(progressRef.current, {
        transformOrigin: "left center",
        scaleX: 1 / slides.length,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top+=120",
          end: `+=${slides.length * 1200}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      slides.forEach((slide, i) => {
        if (i === 0) return;

        tl.to(
          slides[i - 1],
          {
            xPercent: -100,
            opacity: 0,
            duration: 1,
          },
          ">",
        );

        tl.fromTo(
          slide,
          {
            xPercent: 100,
            opacity: 0,
          },
          {
            xPercent: 0,
            opacity: 1,
            duration: 1,
          },
          "<",
        );

        tl.to(
          progressRef.current,
          {
            scaleX: (i + 1) / slides.length,
            duration: 0.5,
            ease: "none",
          },
          "<",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-18 container-c rounded-[24px] overflow-hidden relative py-12"
      style={{
        backgroundImage: "url('/images/bg-flower-2.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <SectionTitle title="How It Works" center />

      <div ref={pinRef} className="relative h-[700px] mt-10 overflow-hidden">
        {/* Slides */}
        <div className="slide absolute inset-0 z-10 flex items-center justify-center pb-24">
          <ServiceStep />
        </div>

        <div className="slide absolute inset-0 z-10 flex items-center justify-center pb-24">
          <ServiceStep />
        </div>

        <div className="slide absolute inset-0 z-10 flex items-center justify-center pb-24">
          <ServiceStep />
        </div>

        {/* Progress */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[420px] z-[9999] pointer-events-none">
          <div className="h-[8px] rounded-full bg-white/70 overflow-hidden backdrop-blur-sm">
            <div
              ref={progressRef}
              className="h-full w-full bg-[var(--primary)] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Explain2() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/bg-flower.png')",
        backgroundOrigin: "border-box",
        backgroundPosition: "center",
        backgroundSize : "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="mt-18 container-c   rounded-[13px]"
    >
      <div className="grid gap-6.5 grid-cols-12 px-6 py-6 relative">
        <div className="col-span-4">
          <p className="text-[var(--primary)] text-[13px]">
            Easy & FastBooking{" "}
          </p>
          <h2 className="text-[var(--text)] font-bold text-[25px] mt-3">
            Book Your Appoinment in 3 Simple Steps
          </h2>
          {/* items */}
          <div className="flex items-center gap-5 mt-6">
            <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg">
              <span className="text-[var(--bg)] text-lg font-bold">1</span>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[var(--text)]">
                Choose your Service
              </h3>

              <p className="mt-1 text-[14px] leading-6 text-[var(--secondary-text)]">
                Select from our wide range of beauty services tailored to your
                needs.
              </p>

              <div className="w-[80px] bg-[var(--primary)] h-[1px] rotate-90 left-2  absolute"></div>
            </div>
          </div>
           {/* items */}
           <div className="flex items-center gap-5 mt-6">
            <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg">
              <span className="text-[var(--bg)] text-lg font-bold">2</span>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[var(--text)]">
                Pick Date & Time
              </h3>

              <p className="mt-1 text-[14px] leading-6 text-[var(--secondary-text)]">
                 Choose your preferred date and time slot
              </p>
              <div className="w-[80px] bg-[var(--primary)] h-[1px] rotate-90 left-2  absolute"></div>
            </div>
          </div>
           {/* items */}
           <div className="flex items-center gap-5 mt-6">
            <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg">
              <span className="text-[var(--bg)] text-lg font-bold">3</span>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[var(--text)]">
                Confirm & Relax
              </h3>

              <p className="mt-1 text-[14px] leading-6 text-[var(--secondary-text)]">
                 Sit back and get ready to look amazing
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-5">
           <Image unoptimized className="w-full shadow-sm rounded-[20px]" 
           src={'/images/calender.png'} width={600} height={800} alt="calender"/>
        </div>

        <div className="col-span-3">
        <Image unoptimized className="w-full shadow-sm mt-15 rounded-[20px]" 
           src={'/images/booking.png'} width={600} height={800} alt="calender"/>
        </div>
      </div>
    </section>
  );
}

export default Explain2;
