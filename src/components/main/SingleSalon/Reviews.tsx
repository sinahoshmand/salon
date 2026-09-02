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
import Data from "@/src/types/single-salon.type";

type Props = {
  data: Data;
};

export default function Reviews({ data }: Props) {
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
            <strong className="text-[35px] text-[var(--text)]">
              {data?.ratings}
            </strong>
            <Rating
              style={{ maxWidth: 100 }}
              value={data?.ratings}
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
            Based on {data?.reviews_count} reviews
          </p>
          {/* Rating item */}
          <RateItem rate={5} persent={data?.percentage?.five_star} />
          <RateItem rate={4} persent={data?.percentage?.four_star} />
          <RateItem rate={3} persent={data?.percentage?.tree_star} />
          <RateItem rate={2} persent={data?.percentage?.two_star} />
          <RateItem rate={1} persent={data?.percentage?.one_star} />
        </div>
        <div className="col-span-6">
          {data?.reviews.length === 0 ? (
            <div className="bg-[var(--surface)] mt-20 mb-14 rounded-2xl shadow-md p-10 flex flex-col items-center justify-center text-center min-h-[220px]">
              <div className="w-14 h-14 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-[var(--primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M7 8h10M7 12h6m-8 8 3.5-3H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1v3z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                No Reviews Yet
              </h3>

              <p className="mt-2 max-w-md text-sm text-[var(--muted-foreground)] leading-6">
                This salon doesn't have any reviews yet. Be the first to share
                your experience!
              </p>
            </div>
          ) : (
            <div>
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
                {data?.reviews?.map((comment) => (
                  <SwiperSlide key={comment.id}>
                    <ReviewCard item={comment} />
                  </SwiperSlide>
                ))}
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
                  className={
                    "group-hover:text-[var(--surface)] text-[var(--text)]"
                  }
                />
              </button>
            </div>
          )}
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
