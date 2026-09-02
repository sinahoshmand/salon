"use client";
import SectionTitle from "./ui/SectionTitle";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
 


interface Data {
  id: string | number;
  image: string;
  icon: string;
  name: string;
  slug: string;
 
}

type Prop = {
  data: Data[];
};

export default function Service({ data }: Prop) {
  return (
    <section className="mt-13 container-c">
      <SectionTitle
        title={`Services`}
        link_name={`View All Services`}
        href="/services"
      />

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
        {data?.map((item) => (
          <SwiperSlide key={item.id} className="py-4">
            <ServiceCard item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
