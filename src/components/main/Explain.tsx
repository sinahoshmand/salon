"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionTitle from "./ui/SectionTitle";
import ServiceStep from "./ui/ServiceStep";

gsap.registerPlugin(ScrollTrigger);

export default function Explain() {
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
