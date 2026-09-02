"use client";
import SalonCard from "./SalonCard";
import SectionTitle from "./ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface Category {
  id: string | number;
  name: string;
  slug: string;
}


interface Data {
  id : string|number
  name : string,
  image : string,
  city : string,
  state : string,
  slug : string,
  rating : number,
  categories : Category[]
}

type Props = {
   data : Data[];
}

export default function PopularSalon({data} : Props) {
  return (
    <section className="mt-13 container-c">
      <SectionTitle
        title={"Popular Salons"}
        link_name={"View All Salons"}
        href="/salons"
      />

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="mt-3"
      >
        {data?.map((item) => (
         <SwiperSlide key={item.id} className="py-4">
           <SalonCard item={item}/>
         </SwiperSlide>
        ))}
       
      </Swiper>
    </section>
  );
}
