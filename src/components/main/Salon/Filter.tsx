"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { getTrackBackground, Range } from "react-range";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale } from "next-intl";
import simpleSearchParams from "@/src/helper/simpleSearchParams";
import arraySearchParams from "@/src/helper/arraySearchParams";
import rangeSearchParams from "@/src/helper/rangeSearchParams";
import clearFilters from "@/src/helper/clearFilter";
import "@smastrom/react-rating/style.css";
const STEP = 10;
const MIN = 0;
const MAX = 2000;

type Service = {
  id: string;
  name: string;
};

export default function Filter() {
  const [values, setValues] = useState({
    min: 0,
    max: 2000,
  });
  const locale = useLocale();

  const searchParams = useSearchParams();
  const selectedServices =
    searchParams.get("services")?.split(",").filter(Boolean) ?? [];

  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/main/services`,
        {
          params: {
            lang: locale,
          },
        },
      );
      return res?.data?.data;
    },
  });

  return (
    <div className="flex flex-col border rounded-[10px] border-[var(--border)] shadow-sm bg-[var(--surface)] px-5 py-5">
      <p className="text-[var(--text)] text-[18px] font-bold">Salon Search</p>
      <div className="relative  w-full mt-4  ">
        <BiSearch
          color="var(--primary)"
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--secondary-text)]"
        />

        <input
          value={searchParams.get("search") ?? ""}
          onChange={(e) => simpleSearchParams("search", e.target.value)}
          type="text"
          placeholder="Search salons..."
          className="
      w-full
      rounded-[10px]
      border
      border-[var(--border)]
      bg-[var(--surface)]
      px-4
      py-3
      text-[15px]
      text-[var(--text)]
      placeholder:text-[var(--secondary-text)]
      transition-all
      duration-200
      outline-none
      hover:border-[var(--primary)]/50
      focus:border-[var(--primary)]
      focus:ring-4
      focus:ring-[var(--primary)]/10
    "
        />
      </div>
      <div className="w-full h-[1px] bg-[var(--border)] mt-6"></div>
      <p className="text-[var(--text)] text-[18px] font-bold mt-6">Location</p>
      <div className="relative  w-full mt-4  ">
        <FaMapMarkerAlt
          size={18}
          color="var(--primary)"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--secondary-text)]"
        />

        <input
          value={searchParams.get("location") ?? ""}
          onChange={(e) => simpleSearchParams("location", e.target.value)}
          type="text"
          placeholder="Search City or State"
          className="
      w-full
      rounded-[10px]
      border
      border-[var(--border)]
      bg-[var(--surface)]
      px-4
      py-3
       
      text-[15px]
      text-[var(--text)]
      placeholder:text-[var(--secondary-text)]
      transition-all
      duration-200
      outline-none
      hover:border-[var(--primary)]/50
      focus:border-[var(--primary)]
      focus:ring-4
      focus:ring-[var(--primary)]/10
    "
        />
      </div>
      <div className="w-full h-[1px] bg-[var(--border)] mt-6"></div>
      <p className="text-[var(--text)] text-[18px] font-bold mt-6">Services</p>
      <div className="space-y-3 mt-4">
        {isLoading ? (
          <div className="flex items-center gap-3 rounded-xl bg-[var(--surface)] py-1">
            <div className="h-5 w-5 rounded-md bg-[var(--border)] animate-pulse" />
            <div className="h-4 w-28 rounded-md bg-[var(--border)] animate-pulse" />
          </div>
        ) : (
          <>
            {services?.map((service: Service) => (
              <label
                key={service.id}
                className="
        group
        flex
        items-center
        gap-3
        cursor-pointer
        rounded-xl
         
        bg-[var(--surface)]
      
        py-1
        transition-all
        hover:border-[var(--primary)]/40
        hover:bg-[var(--primary)]/5
      "
              >
                <input
                  checked={selectedServices.includes(String(service.id))}
                  onChange={(e) =>
                    arraySearchParams(
                      "services",
                      String(service.id),
                      e.target.checked,
                    )
                  }
                  type="checkbox"
                  className="
          h-5
          w-5
          rounded-md
          accent-[var(--primary)]
          border-[var(--border)]
          text-[var(--primary)]
          focus:ring-[var(--primary)]/20
        "
                />

                <span className="text-[14px] text-[var(--text)]">
                  {service.name}
                </span>
              </label>
            ))}
          </>
        )}
      </div>

      <div className="w-full h-[1px] bg-[var(--border)] mt-6"></div>
      <p className="text-[var(--text)] text-[18px] font-bold mt-6">
        Price Range
      </p>
      <div className="rounded-2xl   bg-[var(--surface)] ">
        <div className="mb-5 flex items-center justify-between"></div>
        <Range
          values={[values.min, values.max]}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) =>
          {
            setValues({
              min: values[0],
              max: values[1],
            })
            rangeSearchParams(
             "range", [values[0], values[1]]
            )
          }
          }
          renderTrack={({ props, children }) => (
            <div
             key={Math.random()}
              {...props}
              className="h-2 w-full rounded-full"
              style={{
                background: getTrackBackground({
                  values: [values.min, values.max],
                  colors: ["var(--border)", "var(--primary)", "var(--border)"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="
              h-6
              w-6
              rounded-full
              border-4
              border-white
              bg-[var(--primary)]
              shadow-lg
              outline-none
              transition-transform
              
              active:scale-125
            "
            />
          )}
        />

        <div className="mt-4 flex justify-between text-sm text-[var(--secondary-text)]">
          <span>${values.min}</span>
          <span>${values.max}</span>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[var(--border)] mt-6"></div>
      <p className="text-[var(--text)] text-[18px] font-bold mt-6">Amenities</p>
      <div className="space-y-3 mt-4">
        {["Parking Available", "Wifi", "Online Payment"].map((service) => (
          <label
            key={service}
            className="
        group
        flex
        items-center
        gap-3
        cursor-pointer
        rounded-xl
         
        bg-[var(--surface)]
      
        py-1
        transition-all
        hover:border-[var(--primary)]/40
        hover:bg-[var(--primary)]/5
      "
          >
            <input
              type="checkbox"
              className="
          h-5
          w-5
          rounded-md
          accent-[var(--primary)]
          border-[var(--border)]
          text-[var(--primary)]
          focus:ring-[var(--primary)]/20
        "
            />

            <span className="text-[14px] text-[var(--text)]">{service}</span>
          </label>
        ))}
      </div>

      <button
        onClick={() => clearFilters()}
        className="w-full px-3 py-2 bg-[var(--surface)] mt-7 
      border text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg)]
       border-[var(--primary)] transition-all duration-300 rounded-[10px] "
      >
        Clear Filters
      </button>
    </div>
  );
}
