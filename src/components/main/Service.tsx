"use client";
import SectionTitle from "./ui/SectionTitle";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Service() {
  return (
    <section className="mt-13 container-c">
      <SectionTitle title={`Services`} link_name={`View All Services`} />

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
        <SwiperSlide className="py-4">
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide className="py-4">
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide className="py-4">
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide className="py-4">
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide className="py-4">
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide className="py-4">
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide className="py-4">
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide className="py-4">
          <ServiceCard />
        </SwiperSlide>
        <SwiperSlide className="py-4">
          <ServiceCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
