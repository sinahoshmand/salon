"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Fragment } from "react";
import { IconType } from "react-icons";
import { FaFemale, FaList, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setLocation :  React.Dispatch<React.SetStateAction<any>>,
  location : string|null,
};

type Data = {
  image: string;
  name: string;
  id: number;
  icon: string;
 
};

export default function LocationModal({ open, setOpen , setLocation , location }: Props) {
  const locale = useLocale();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["FilterLocations"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}`,
      );
      return res.data;
    },
    staleTime: 1000 * 60 * 60,
  });

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/35 backdrop-blur-sm" />
        </TransitionChild>

        {/* Modal container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <DialogPanel className="w-full max-w-2xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_25px_80px_rgba(201,123,139,0.18)]">
                {/* Header */}
                <div className="relative border-b border-[var(--border)] px-6 py-6 sm:px-8">
                  <div className="pr-10">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                        <FaMapMarkerAlt className="h-5 w-5 text-[var(--primary)]" />
                      </div>

                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
                         Select Your Location
                      </span>
                    </div>

                    <DialogTitle className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
                      Choose a Location
                    </DialogTitle>

                    
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl text-[var(--secondary-text)] transition hover:bg-[var(--bg)] hover:text-[var(--text)]"
                  >
                    <FaTimes className="h-5 w-5" />
                  </button>
                </div>

                {/* Services */}
                <div className="max-h-[65vh] overflow-y-auto p-4 sm:p-6">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {isLoading ? (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <div
                            key={index}
                            className="flex animate-pulse items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4"
                          >
                            <div className="h-12 w-12 shrink-0 rounded-2xl bg-gray-200" />

                            <div className="min-w-0 flex-1 space-y-2">
                              <div className="h-4 w-3/5 rounded-md bg-gray-200" />
                              <div className="h-3 w-full rounded-md bg-gray-100" />
                              <div className="h-3 w-4/5 rounded-md bg-gray-100" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        {[].map((service: Data) => (
                          <button
                            
                            key={service.id}
                            type="button"
                            onClick={() => {
                            
                               setOpen(false)
                            }}
                            className="
      group relative flex w-full items-center gap-4
      overflow-hidden rounded-2xl
      border border-[var(--border)]
      bg-[var(--surface)]
      p-4
      text-left
      transition-all duration-300

      hover:-translate-y-0.5
      hover:border-[var(--rose-gold)]
      hover:shadow-[0_12px_35px_rgba(201,123,139,0.12)]
    "
                          >
                            {/* subtle background effect */}
                            <div
                              className="
        absolute inset-0
        bg-gradient-to-r
        from-[var(--primary)]/[0.03]
        to-transparent
        opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
      "
                            />

                            {/* Icon */}
                            <div
                              className="
        relative flex h-14 w-14 shrink-0
        items-center justify-center
        rounded-2xl
        border border-[var(--rose-gold)]/20
        bg-[var(--primary)]/8
        transition-all duration-300

        group-hover:scale-105
        group-hover:border-[var(--primary)]/30
        group-hover:bg-[var(--primary)]/12
      "
                            >
                              <Image
                                unoptimized
                                src={service.icon}
                                alt={service.name}
                                width={44}
                                height={44}
                                className="
          h-10 w-10
          object-contain
          transition-transform duration-300
          group-hover:scale-110
        "
                              />
                            </div>

                            {/* Service info */}
                            <div className="relative min-w-0 flex-1">
                              <h3
                                className="
          truncate
          text-[15px]
          font-semibold
          tracking-tight
          text-[var(--text)]
          transition-colors duration-200
          group-hover:text-[var(--primary)]
        "
                              >
                                {service.name}
                              </h3>

                              <span
                                className="
          mt-1 block
          text-xs
          text-[var(--secondary-text)]
        "
                              >
                                View service
                              </span>
                            </div>

                            {/* Arrow */}
                            <div
                              className="
        relative flex h-9 w-9 shrink-0
        items-center justify-center
        rounded-xl
        bg-[var(--bg)]
        text-[var(--secondary-text)]
        transition-all duration-300

        group-hover:bg-[var(--primary)]/10
        group-hover:text-[var(--primary)]
        group-hover:translate-x-0.5
      "
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m9 5 7 7-7 7"
                                />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-4 border-t border-[var(--border)] bg-[var(--bg)] px-6 py-4 sm:px-8">
                  <p className="text-xs text-[var(--secondary-text)]">
                    Find the right service for your beauty needs.
                  </p>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
                  >
                    Close
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
