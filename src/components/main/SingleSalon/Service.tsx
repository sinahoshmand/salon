"use client";
import SectionTitle from "../ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ServiceCard from "./ServiceCard";
import services from "@/src/data/services";

export default function Service() {
  return (
    <section className="container-c mt-13">
      <SectionTitle title={`Our Service`} link_name="View All Services"/>
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
        {services.map((item) => (
          <SwiperSlide key={item.id} className="py-4">
            <ServiceCard item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
