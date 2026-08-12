"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { HiPlus } from "react-icons/hi";
import { BsChat, BsHeadset } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";

export default function Faq() {
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
    <section className="container-c mt-15">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7">
          <SectionTitle title="Why Contact Us?" />
          <div className="grid grid-cols-3 mt-5 gap-7">
            {/* items */}
            <div className="bg-[var(--surface)]  transition-all duration-300 scale-100
             hover:scale-104 flex flex-col items-center shadow-sm border border-[var(--border)] rounded-[10px] px-5 py-8">
              <div
                className="w-[70px] h-[70px] flex justify-center items-center
               bg-[var(--rose-gold)]/30 rounded-full p-4"
              >
                <BsHeadset color="var(--primary)" size={30} />
              </div>
              <div className="flex flex-col px-1 mt-4">
                <h3 className="text-[var(--text)] text-center font-bold mb-1.5 text-[14px]">
                  Professional Support
                </h3>
                <p className="text-[var(--secondary-text)] text-center font-bold  leading-6  text-[12px]">
                  Our team is trained to provide the best soulotions
                </p>
              </div>
            </div>
            {/* items */}
            <div className="bg-[var(--surface)]  transition-all duration-300  scale-100 
            hover:scale-104 flex flex-col items-center shadow-sm border border-[var(--border)] rounded-[10px]  px-5 py-8">
              <div
                className="w-[70px] h-[70px] flex justify-center items-center
               bg-[var(--rose-gold)]/30 rounded-full p-4"
              >
                <BsChat color="var(--primary)" size={30} />
              </div>
              <div className="flex flex-col px-1 mt-4">
                <h3 className="text-[var(--text)] text-center font-bold mb-1.5 text-[14px]">
                  Fast Response
                </h3>
                <p className="text-[var(--secondary-text)] text-center font-bold  leading-6  text-[12px]">
                  We value your time and always respond quickly
                </p>
              </div>
            </div>
            {/* items */}
            <div className="bg-[var(--surface)]   transition-all duration-300 scale-100 hover:scale-104
              flex flex-col items-center shadow-sm border border-[var(--border)] rounded-[10px]  px-5 py-8">
              <div
                className="w-[70px] h-[70px] flex justify-center items-center
               bg-[var(--rose-gold)]/30 rounded-full p-4"
              >
                <BiRocket color="var(--primary)" size={30} />
              </div>
              <div className="flex flex-col px-1 mt-4">
                <h3 className="text-[var(--text)] text-center font-bold mb-1.5 text-[14px]">
                  Customer Satisfaction
                </h3>
                <p className="text-[var(--secondary-text)] text-center font-bold  leading-6  text-[12px]">
                  Your Satisfaction is our top priority in every interaction
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <SectionTitle title="Frequently Asked Questions" />
          <div className="space-y-4 mt-7">
            {faqs.map((item, index) => {
              const active = open === index;
              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ duration: 0.35 }}
                  className="rounded-[10px] mb-1.5 border border-[var(--border)] bg-[var(--card)] overflow-hidden"
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
