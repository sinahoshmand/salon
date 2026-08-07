"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "../ui/SectionTitle";
import StylistCard from "./StylistCard";

export default function Stylist(){
    return(
        <section className="container-c mt-13">
           <SectionTitle title={'Meet Our Stylist'} link_name="View All Stylist"/>
           <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6,
          },
          1280: {
            slidesPerView: 7,
          },
        }}
        className="mt-3"
      >
        
          <SwiperSlide   className="py-4">
             <StylistCard/>
          </SwiperSlide>
          <SwiperSlide   className="py-4">
             <StylistCard/>
          </SwiperSlide>
          <SwiperSlide   className="py-4">
             <StylistCard/>
          </SwiperSlide>
        
      </Swiper>

        </section>
    )
}