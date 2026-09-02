"use client";
import Data from "@/src/types/single-salon.type";
import { image } from "motion/react-client";
import { useRef, useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";

type Props = {
  data: Data;
};

export default function AboutSalon({ data }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <section className="mt-13 container-c about-banner2  border shadow-sm border-[var(--border)] rounded-[13px]">
      <div className="grid gap-6.5 grid-cols-12 px-8 py-8 relative">
        <div className="col-span-5">
          <p className="text-[12px] font-bold text-[var(--primary)] items-start flex gap-1.5">
            <BsStars color="var(--primary)" size={11} />
            ABOUT OUR SALON
            <BsStars color="var(--primary)" size={11} />
          </p>
          <h2 className="text-[var(--text)] font-bold text-[27px] mt-3">
            About Luxe Beauty Studio
          </h2>
          <div className="h-1 w-[70px] mt-3 bg-[var(--primary)]"></div>
          <div
            dangerouslySetInnerHTML={{ __html: data.desc }}
            className="  max-w-max mt-3 text-[var(--text)] text-[14px] leading-7"
          ></div>
        </div>
        <div className="col-span-7">
          <div className="relative flex items-center overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--card)] shadow-lg group">
            {!playing && (
              <button
                onClick={handlePlay}
                className="absolute z-30 w-[90px] h-[90px] top-1/2 left-1/2 
  -translate-x-1/2 -translate-y-1/2 flex items-center justify-center 
  bg-[var(--surface)] shadow-sm rounded-full"
              >
                <FaPlay
                  className="scale-100 transition-transform duration-300 hover:scale-110"
                  size={40}
                  color="var(--primary)"
                />
              </button>
            )}

            <video
             onPlay={() => setPlaying(true)}
             onPause={() => setPlaying(false)}
              ref={videoRef}
              className="w-full h-[420px] object-cover"
              controls
              poster={data.image}
            >
              <source src={data.video ?? null} type="video/mp4" />
            </video>

            {/* Top Badge */}
            <div className="absolute top-5 left-5">
              <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[13px] font-medium shadow">
                ✨ {data.name} Experience
              </span>
            </div>

            {/* Bottom Gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
