"use client";
import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaUsers } from "react-icons/fa6";
import { BsBuilding } from "react-icons/bs";
import { TiTime } from "react-icons/ti";
import { SlStar } from "react-icons/sl";

const stats = [
  {
    value: "20k+",
    title: "Happy Customers",
    icon: <FaUsers size={25} />,
  },
  {
    value: "500",
    title: "Salons",
    icon: <BsBuilding size={25} />,
  },
  {
    value: "50k+",
    title: "Appointments",
    icon: <TiTime size={25} />,
  },
  {
    value: "4.9",
    title: "Average Rating",
    icon: <SlStar size={25} />,
  },
];

export default function Testimonial() {
  return (
    <section className={`mt-13 container-c  `}>
      <div className={`grid gap-9 grid-cols-12`}>
        <div className={"col-span-4"}>
          <SectionTitle title={"What Our Clients Say"} />
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1280: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className="py-4">
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={"col-span-8"}>
          <div
            className="px-15 py-10 grid grid-cols-4 gap-7 rounded-[16px]"
            style={{
              backgroundImage: "url('/images/bg-flower.png')",
              backgroundOrigin: "border-box",
              backgroundSize : "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="bg-[var(--surface)] p-5 rounded-full shadow-sm">
                  <span className="text-[var(--primary)]">{item.icon}</span>
                </div>

                <p className="text-[30px] mt-3 text-[var(--text)] font-bold leading-none">
                  {item.value}
                </p>

                <p className="text-[15px] mt-2 text-[var(--secondary-text)] ">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
