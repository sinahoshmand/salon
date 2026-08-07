"use client";
import SectionTitle from "../ui/SectionTitle";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ReviewCard from "./ReviewCard";
import { BsArrowRight } from "react-icons/bs";
import RateItem from "./RateItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiPlus } from "react-icons/hi2";
export default function Reviews() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I book an appointment?",
      answer:
        "Simply choose your preferred salon, select a service, pick an available time slot, and confirm your booking in just a few clicks.",
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer:
        "Yes. You can manage, cancel, or reschedule your appointment directly from your account before the scheduled time.",
    },
    {
      question: "Do I need to pay online?",
      answer:
        "Most salons support online payments, while some also allow you to pay in person after your appointment.",
    },
    {
      question: "How do I know if a salon is trustworthy?",
      answer:
        "Every salon has verified reviews, ratings, photos, and service details so you can confidently choose the best one.",
    },
  ];

  return (
    <section className="container-c mt-13">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <SectionTitle title={"Customer Reviews"} />
          <div className="flex gap-3 items-center mt-7">
            <strong className="text-[35px] text-[var(--text)]">4.9</strong>
            <Rating
              style={{ maxWidth: 100 }}
              value={5}
              readOnly
              itemStyles={{
                itemShapes: RoundedStar,
                activeFillColor: "#FACC15",
                activeStrokeColor: "#EAB308",
                inactiveFillColor: "#E5E7EB",
                inactiveStrokeColor: "#D1D5DB",
              }}
            />
          </div>
          <p className="text-[14px] mt-1 text-[var(--secondary-text)]">
            Based on 1,245 reviews
          </p>
          {/* Rating item */}
          <RateItem rate={5} persent={90} />
          <RateItem rate={4} persent={75} />
          <RateItem rate={3} persent={35} />
          <RateItem rate={2} persent={22} />
          <RateItem rate={1} persent={13} />
        </div>
        <div className="col-span-6">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={22}
            className="mt-20 pb-14"
            breakpoints={{
              0: {
                slidesPerView: 1.15,
              },
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
          </Swiper>

          <button
            className="border-2 mt-4 text-[14px] 
          justify-center group m-auto w-[280px] text-[var(--text)] 
          hover:bg-[var(--primary)]
           transition-all
           duration-300
          hover:text-[var(--surface)]
          gap-2 text-center flex 
          items-center font-bold border-[var(--primary)] 
          rounded-[10px]   py-3 px-3"
          >
            View All Reviews
            <BsArrowRight
              className={"group-hover:text-[var(--surface)] text-[var(--text)]"}
            />
          </button>
        </div>
        <div className="col-span-3">
          <SectionTitle title="FAQs" />
          <div className="space-y-4 mt-12">
            {faqs.map((item, index) => {
              const active = open === index;
              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(active ? null : index)}
                    className="w-full flex items-center justify-between px-3 py-3 bg-[var(--surface)] text-left group"
                  >
                    <h3 className="font-semibold text-[13px] text-[var(--title)] group-hover:text-[var(--primary)] transition-colors">
                      {item.question}
                    </h3>

                    <motion.div
                      animate={{
                        rotate: active ? 45 : 0,
                        backgroundColor: active
                          ? "var(--primary)"
                          : "rgba(255,255,255,.05)",
                      }}
                      transition={{ duration: 0.25 }}
                      className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] shrink-0"
                    >
                      <HiPlus
                        size={18}
                        className={
                          active ? "text-white" : "text-[var(--primary)]"
                        }
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="px-6 pb-6 text-[13px] mt-3 leading-7 text-[var(--secondary-text)]"
                        >
                          {item.answer}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
