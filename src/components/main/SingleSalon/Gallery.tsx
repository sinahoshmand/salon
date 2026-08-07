"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { FiArrowRight } from "react-icons/fi";


import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/salon.jpg",
  "/images/salon-banner.png",
  "/images/salon1.webp",
 
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="container-c mt-13">

      <SectionTitle title="Salon Gallery" link_name="View All Galleries"/>

      <Swiper
        modules={[Navigation, Pagination]}
        
       
        spaceBetween={22}
        className="mt-10 pb-14"
        breakpoints={{
          0: {
            slidesPerView: 1.15,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div
              onClick={() => setIndex(i)}
              className="group cursor-pointer"
            >
              <div
                className="
                  relative
                  h-[160px]
                  overflow-hidden
                  rounded-[20px]
                  shadow-xl
                "
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                  "
                />
 

                {/* Bottom Content */}
                <div className="absolute bottom-5 left-5 right-5">

                  <div className="flex items-end justify-between">
 

                    <button
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-white/20
                        backdrop-blur-lg
                        flex
                        items-center
                        justify-center
                        text-white
                        transition-all
                        duration-300
                        group-hover:bg-[var(--primary)]
                        group-hover:bg-[var(--bg)]
                        group-hover:rotate-45
                      "
                    >
                      <FiArrowRight size={20} />
                    </button>

                  </div>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        plugins={[Zoom]}
        slides={images.map((src) => ({
          src,
        }))}
      />

    </section>
  );
}