"use client";

import toEnglishDigits from "@/src/helper/convert";
import date from "@/src/helper/date";
import Jalali from "@/src/helper/jalali";
import { formatDollar } from "@/src/helper/price";
import { getTimePeriod } from "@/src/helper/timePeriod";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import DateObject from "react-date-object";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import { BiMoney } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { Calendar } from "react-multi-date-picker";

interface Time {
  time: string;
  id: string;
}

interface Data {
  name: string;
  image: string;
  price: number;
  category: string;
  dates: {
    id: string;
    date: string;
    times: {
      time: string;
      id: string;
    }[];
  }[];
}

type SelectedDate = {
  id: string;
  date: string;
};

type Props = {
  data: Data;
};

export default function Form({ data }: Props) {
  const [step, setStep] = useState<number>(1);
  const { status } = useSession();
  const availableDates = data.dates.map((item) => item.date);
  const [selectedDate, setSelectedDate] = useState<SelectedDate | null>(null);
  const [selectedTime, setSelectedTime] = useState<Time | null>(null);
  const [times, setTimes] = useState<Time[]>([]);
  const locale = useLocale();
  return (
    <section>
      <div className="bg-[var(--surface)] p-10 rounded-[10px] border border-[var(--border)] shadow-sm">
        <div className="flex w-full items-center">
          {/* Step 1 */}
          <div className="flex flex-1 items-center">
            <div className="flex shrink-0 items-center gap-3">
              <div
                className={`flex h-[50px] w-[50px] items-center justify-center rounded-full ${step === 1 ? " bg-[var(--primary)]" : "bg-gray-300"}`}
              >
                <span
                  className={`text-[17px] ${step === 1 ? "text-[var(--bg)]" : "text-[var(--text)]"}`}
                >
                  1
                </span>
              </div>

              <h3 className="whitespace-nowrap text-[15px] font-bold text-[var(--text)]">
                Service
              </h3>
            </div>

            <div className="mx-5 h-[1px] flex-1 bg-[var(--primary)]" />
          </div>

          {/* Step 2 */}
          <div className="flex flex-1 items-center">
            <div className="flex shrink-0 items-center gap-3">
              <div
                className={`flex h-[50px] w-[50px] items-center justify-center rounded-full ${step === 2 ? " bg-[var(--primary)]" : "bg-gray-300"}`}
              >
                <span
                  className={`text-[17px] ${step === 2 ? "text-[var(--bg)]" : "text-[var(--text)]"}`}
                >
                  2
                </span>
              </div>

              <h3 className="whitespace-nowrap text-[15px] font-bold text-[var(--text)]">
                Date & Time
              </h3>
            </div>

            <div className="mx-5 h-[1px] flex-1 bg-gray-300" />
          </div>

          {/* Step 3 */}
          <div className="flex shrink-0 items-center gap-3">
            <div
              className={`flex h-[50px] w-[50px] items-center justify-center rounded-full ${step === 3 ? " bg-[var(--primary)]" : "bg-gray-300"}`}
            >
              <span
                className={`text-[17px] ${step === 3 ? "text-[var(--bg)]" : "text-[var(--text)]"}`}
              >
                3
              </span>
            </div>

            <h3 className="whitespace-nowrap text-[15px] font-bold text-[var(--text)]">
              Details
            </h3>
          </div>
        </div>
        {step === 1 && (
          <div className="mt-10">
            <h2 className="text-[var(--text)] font-bold text-[18px]">
              Select Service
            </h2>
            <div
              className="flex justify-between items-center mt-5 p-4  shadow-sm border-2 bg-[var(--rose-gold)]/10
 rounded-[13px] border-[var(--primary)]"
            >
              <div className="flex flex-row gap-5 items-center">
                <Image
                  unoptimized
                  src={data.image}
                  alt={data.name}
                  width={100}
                  height={100}
                  className="w-[80px] h-[80px] rounded-[10px]"
                />
                <div className="flex flex-col gap-3">
                  <strong className="text-[19px] font-bold text-[var(--text)]">
                    {data.name}
                  </strong>
                  <p className="text-[16px] text-[var(--secondary-text)]">
                    {data.category}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <strong className="text-[var(--primary)] font-bold text-[16px]">
                  {formatDollar(data.price)}
                </strong>
                <FaCheckCircle color="var(--primary)" size={25} />
              </div>
            </div>
            <div className="w-full bg-[var(--border)] h-[2px] mt-10 mb-10"></div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <p className="text-[var(--text)]  text-[15px]">Total Amount</p>
                <strong className="text-[var(--primary)]   text-[25px]">
                  {formatDollar(data.price)}
                </strong>
              </div>
              <button
                onClick={() => setStep(2)}
                className="px-7 mt-8 py-3 text-[var(--surface)] 
            items-center flex gap-3 scale-100 hover:scale-105 transition-all duration-300
             rounded-[10px] bg-[var(--primary)] max-w-max"
              >
                Next Step
                <BsArrowRight color="var(--surface)" size={18} />
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="mt-10">
            <h2 className="text-[var(--text)] font-bold text-[18px]">
              Date & Time
            </h2>
            <div
              className="flex justify-between items-center mt-5 p-4  shadow-sm border-2 bg-[var(--rose-gold)]/10
 rounded-[13px] border-[var(--primary)]"
            >
              <div className="flex flex-row gap-5 items-center">
                <Image
                  unoptimized
                  src={data.image}
                  alt={data.name}
                  width={100}
                  height={100}
                  className="w-[80px] h-[80px] rounded-[10px]"
                />
                <div className="flex flex-col gap-3">
                  <strong className="text-[19px] font-bold text-[var(--text)]">
                    {data.name}
                  </strong>
                  <p className="text-[16px] text-[var(--secondary-text)]">
                    {data.category}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <strong className="text-[var(--primary)] font-bold text-[16px]">
                  {formatDollar(data.price)}
                </strong>
                <FaCheckCircle color="var(--primary)" size={25} />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-10 mt-10">
              <div className="col-span-7">
                <p className="mb-5 text-lg font-semibold text-[var(--text)]">
                  Select Date
                </p>

                <div className="salon-calendar">
                  <Calendar
                    value={selectedDate?.date}
                    onChange={(date: any) => {
                      const formattedDate = date.format("YYYY-MM-DD");

                      const selected = data.dates.find(
                        (item) => item.date === toEnglishDigits(formattedDate),
                      );

                      if (!selected) return;

                      setSelectedDate({
                        id: selected.id,
                        date: selected.date,
                      });
                      setTimes(selected?.times);
                    }}
                    calendar={locale === "en" ? gregorian : persian}
                    locale={locale === "en" ? gregorian_en : persian_fa}
                    numberOfMonths={1}
                    showOtherDays
                    mapDays={({ date }) => {
                      const currentDate = date.format("YYYY-MM-DD");

                      const available = data.dates.some(
                        (item) => item.date === toEnglishDigits(currentDate),
                      );

                      return {
                        disabled: !available,
                      };
                    }}
                  />
                </div>
              </div>
              <div className="col-span-5">
                <p className="mb-5 text-lg font-semibold text-[var(--text)]">
                  Available Time
                </p>

                {times?.length === 0 ? (
                  <div className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C97B8B]/10">
                      <svg
                        className="h-6 w-6 text-[#C97B8B]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-sm font-semibold text-gray-800">
                      Select a date to view available times
                    </h3>

                    <p className="mt-1 max-w-sm text-xs leading-5 text-gray-500">
                      Choose your preferred date from the calendar to see the
                      available booking times.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 mt-6 items-center gap-6">
                    {times?.map((time) => (
                      <button
                        onClick={() => {
                          setSelectedTime({
                            id: time.id,
                            time: time.time,
                          });
                        }}
                        key={time.id}
                        className={`flex justify-center group transition-all 
                      duration-300 hover:bg-[var(--primary)] ${selectedTime?.id === time.id ? "bg-[var(--primary)]" : ""} items-center border 
                      rounded-[10px]  py-3 px-9 shadow-sm border-[var(--border)]`}
                      >
                        <p
                          className={`transition-all text-center duration-300 
                        group-hover:text-[var(--surface)] ${selectedTime?.id === time.id ? "text-[var(--bg)]" : "text-[var(--text)]"}
                         `}
                        >
                          {time.time}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="w-full bg-[var(--border)] h-[2px] mt-10 mb-10"></div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <p className="text-[var(--text)]  text-[15px]">Total Amount</p>
                <strong className="text-[var(--primary)]   text-[23px]">
                  {formatDollar(data.price)}
                </strong>
                <p className="text-[var(--text)]  text-[15px] mt-2">
                  Your selection
                </p>
                <strong className="text-[var(--primary)]   text-[18px]">
                  {selectedDate?.date
                    ? `${locale === "fa" ? selectedDate.date : date(selectedDate.date)} - ${selectedTime?.time ?? ""} ${getTimePeriod(selectedTime?.time ?? "")}`
                    : ""}
                </strong>
              </div>
              <div className="flex gap-5">
                <button
                  onClick={() => setStep(1)}
                  className="px-7 mt-8 py-3 text-[var(--surface)] 
            items-center flex gap-3 scale-100 hover:scale-105 transition-all duration-300
             rounded-[10px] bg-[var(--primary)] max-w-max"
                >
                  Back
                  <BsArrowLeft color="var(--surface)" size={18} />
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-7 mt-8 py-3 text-[var(--surface)] 
            items-center flex gap-3 scale-100 hover:scale-105 transition-all duration-300
             rounded-[10px] bg-[var(--primary)] max-w-max"
                >
                  Next Step
                  <BsArrowRight color="var(--surface)" size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mt-10">
            <h2 className="text-[var(--text)] font-bold text-[18px]">
              Select Service
            </h2>
            <div
              className="flex justify-between items-center mt-5 p-4  shadow-sm border-2 bg-[var(--rose-gold)]/10
 rounded-[13px] border-[var(--primary)]"
            >
              <div className="flex flex-row gap-5 items-center">
                <Image
                  unoptimized
                  src={data.image}
                  alt={data.name}
                  width={100}
                  height={100}
                  className="w-[80px] h-[80px] rounded-[10px]"
                />
                <div className="flex flex-col gap-3">
                  <strong className="text-[19px] font-bold text-[var(--text)]">
                    {data.name}
                  </strong>
                  <p className="text-[16px] text-[var(--secondary-text)]">
                    {data.category}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <strong className="text-[var(--primary)] font-bold text-[16px]">
                  {formatDollar(data.price)}
                </strong>
                <FaCheckCircle color="var(--primary)" size={25} />
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              {status === "authenticated" ? (
                <>
                  {/* Logged in */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Almost there ✨
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Your contact information is already saved. Just add any
                      special requests and choose your payment method.
                    </p>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Additional Notes
                      <span className="ml-1 font-normal text-gray-400">
                        (Optional)
                      </span>
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Anything you'd like us to know about your appointment..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#C97B8B] focus:bg-white focus:ring-2 focus:ring-[#C97B8B]/10"
                    />
                  </div>

                  {/* Payment */}
                  <div className="mt-6">
                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Payment Method
                    </label>

                    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-[#C97B8B] bg-[#C97B8B]/5 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
                          💳
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            Online Payment
                          </p>
                          <p className="text-xs text-gray-500">
                            Pay securely through our payment gateway
                          </p>
                        </div>
                      </div>

                      <input
                        type="radio"
                        name="payment_method"
                        value="online"
                        defaultChecked
                        className="h-5 w-5 accent-[#C97B8B]"
                      />
                    </label>
                  </div>
                </>
              ) : (
                <>
                  {/* Guest */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Your Information
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Enter your contact details so we can confirm your
                      appointment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#C97B8B] focus:bg-white focus:ring-2 focus:ring-[#C97B8B]/10"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="+1 234 567 890"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#C97B8B] focus:bg-white focus:ring-2 focus:ring-[#C97B8B]/10"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Additional Notes
                      <span className="ml-1 font-normal text-gray-400">
                        (Optional)
                      </span>
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Anything you'd like us to know about your appointment..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#C97B8B] focus:bg-white focus:ring-2 focus:ring-[#C97B8B]/10"
                    />
                  </div>

                  {/* Payment */}
                  <div className="mt-6">
                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Payment Method
                    </label>

                    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-[#C97B8B] bg-[#C97B8B]/5 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
                          💳
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            Online Payment
                          </p>
                          <p className="text-xs text-gray-500">
                            Pay securely through our payment gateway
                          </p>
                        </div>
                      </div>

                      <input
                        type="radio"
                        name="payment_method"
                        value="online"
                        defaultChecked
                        className="h-5 w-5 accent-[#C97B8B]"
                      />
                    </label>
                  </div>
                </>
              )}
            </div>
            <div className="w-full bg-[var(--border)] h-[2px] mt-10 mb-10"></div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <p className="text-[var(--text)]  text-[15px]">Total Amount</p>
                <strong className="text-[var(--primary)]   text-[25px]">
                  {formatDollar(data.price)}
                </strong>
                <p className="text-[var(--text)]  text-[15px] mt-2">
                  Your selection
                </p>
                <strong className="text-[var(--primary)]   text-[18px]">
                  {selectedDate?.date
                    ? `${locale === "fa" ? selectedDate.date : date(selectedDate.date)} - ${selectedTime?.time ?? ""} ${getTimePeriod(selectedTime?.time ?? "")}`
                    : ""}
                </strong>
              </div>
              <div className="flex gap-5 items-center">
                <button
                  onClick={() => setStep(2)}
                  className="px-7 mt-8 py-3 text-[var(--surface)] 
             items-center flex gap-3 scale-100 hover:scale-105 transition-all duration-300
              rounded-[10px] bg-[var(--primary)] max-w-max"
                >
                  Back
                  <BsArrowLeft color="var(--surface)" size={18} />
                </button>
                <button
                  className="px-7 mt-8 py-3 text-[var(--surface)] 
             items-center flex gap-3 scale-100 hover:scale-105 transition-all duration-300
              rounded-[10px] bg-[var(--primary)] max-w-max"
                >
                  Proceed to Payment
                  <BiMoney color="var(--surface)" size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
