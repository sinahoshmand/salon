"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { pre } from "motion/react-client";
import { useLocale } from "next-intl";
import { Oval } from "react-loader-spinner";
import { Fragment, useEffect, useRef, useState } from "react";

import { FaCity, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setLocation: React.Dispatch<React.SetStateAction<any>>;
  location: string | null;
};

type Data = {
  name: string;
  id: number;
  state: string;
};

export default function LocationModal({
  open,
  setOpen,
  setLocation,
  location,
}: Props) {
  
  const [search, setSearch] = useState<string>('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const previousScrollHeight = useRef(0);
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["FilterLocations", search],
  
    queryFn: async ({ pageParam = 1 }) => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/main/cities`,
        {
          params: {
            q: search,
            page: pageParam,
            per_page: 20,
          },
        }
      );
  
      return res.data;
    },
  
    initialPageParam: 1,
  
    getNextPageParam: (lastPage) => {
      return lastPage.meta?.current_page < lastPage.meta?.last_page
        ? lastPage.meta.current_page + 1
        : undefined;
    },
  
    staleTime: 1000 * 60 * 60,
  });

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
  
    const isAtBottom =
      element.scrollTop + element.clientHeight >=
      element.scrollHeight - 10;
  
    if (
      isAtBottom &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
    
      previousScrollHeight.current = element.scrollHeight;
  
      fetchNextPage();
    }
  };

  const cities =
  data?.pages.flatMap((page) => page.data) ?? [];


  useEffect(() => {
    if (isFetchingNextPage || !previousScrollHeight.current) return;
  
    const element = scrollRef.current;
  
    if (!element) return;
  
   
    const heightDifference =
      element.scrollHeight - previousScrollHeight.current;
  
     
    element.scrollTop += heightDifference;
  
    previousScrollHeight.current = 0;
  }, [data, isFetchingNextPage]);
  

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
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="max-h-[65vh] overflow-y-auto p-4 sm:p-6"
                >
                  <div className="flex flex-row gap-5">
                    <input
                      type="text"
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search State or City ..."
                      className="
          w-full
          py-3
          pl-5
          mb-5
          rounded-xl
          bg-[var(--surface)]
          border
          border-[var(--border)]
          text-[var(--secondary-text)]
          placeholder:text-[var(--muted)]
          outline-none
          focus:border-[var(--primary)]
          transition
          "
                    />

                    
                  </div>

                  {isFetchingNextPage || isLoading ? (
                    <div className="flex min-h-[300px] w-full flex-col items-center justify-center gap-4">
                      <Oval
                        visible={true}
                        height="42"
                        width="42"
                        color="#C97B8B"
                        secondaryColor="#F0E8E1"
                        strokeWidth="4"
                        strokeWidthSecondary="4"
                        ariaLabel="loading"
                      />

                      <span className="text-sm text-[#6B6B6B]">
                        Fetching Data please wait ...
                      </span>
                    </div>
                  ) : (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {cities?.map((city: Data) => (
                        <button
                          key={city.id}
                          type="button"
                          onClick={() => {
                            setLocation(`${city.name}`);
                            setOpen(false);
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
                            <FaCity size={30} color="var(--primary)" />
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
                              {city.name}
                            </h3>

                            <span
                              className="
          mt-1 block
          text-xs
          text-[var(--secondary-text)]
        "
                            >
                              {city.state}
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
                    </div>
                  )}
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
