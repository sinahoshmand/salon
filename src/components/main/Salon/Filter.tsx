"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import { getTrackBackground, Range } from "react-range";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const STEP = 10;
const MIN = 0;
const MAX = 500;

export default function Filter() {
  const [values, setValues] = useState([0, 500]);
  const [rating, setRating] = useState<number>(4.3);

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
          type="text"
          placeholder="Select Location..."
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
        {[
          "Haircut",
          "Hair Coloring",
          "Hair Styling",
          "Blow Dry",
          "Hair Treatment",
          "Keratin",
          "Facial",
          "Makeup",
          "Manicure",
          "Pedicure",
        ].map((service) => (
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

      <div className="w-full h-[1px] bg-[var(--border)] mt-6"></div>
      <p className="text-[var(--text)] text-[18px] font-bold mt-6">
        Price Range
      </p>
      <div className="rounded-2xl   bg-[var(--surface)] ">
        <div className="mb-5 flex items-center justify-between"></div>
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={setValues}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-2 w-full rounded-full"
              style={{
                background: getTrackBackground({
                  values,
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
          <span>${values[0]}</span>
          <span>${values[1]}</span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[var(--border)] mt-6"></div>
      <p className="text-[var(--text)] text-[18px] font-bold mt-6">Rating</p>

      <div className="space-y-3 mt-4">
          <label
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

           
            <Rating
        style={{ maxWidth: 80 }}
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
       <span className="text-[14px] text-[var(--secondary-text)]">5.0</span>
          </label>
          <label
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

           
            <Rating
        style={{ maxWidth: 80 }}
        value={4}
        readOnly
        itemStyles={{
          itemShapes: RoundedStar,
          activeFillColor: "#FACC15",
          activeStrokeColor: "#EAB308",
          inactiveFillColor: "#E5E7EB",
          inactiveStrokeColor: "#D1D5DB",
        }}
      />
       <span className="text-[14px] text-[var(--secondary-text)]">4.0</span>
          </label>
          <label
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

           
            <Rating
        style={{ maxWidth: 80 }}
        value={3}
        readOnly
        itemStyles={{
          itemShapes: RoundedStar,
          activeFillColor: "#FACC15",
          activeStrokeColor: "#EAB308",
          inactiveFillColor: "#E5E7EB",
          inactiveStrokeColor: "#D1D5DB",
        }}
      />
       <span className="text-[14px] text-[var(--secondary-text)]">3.0</span>
          </label>
      </div>
      <div className="w-full h-[1px] bg-[var(--border)] mt-6"></div>
      <p className="text-[var(--text)] text-[18px] font-bold mt-6">Amenities</p>
      <div className="space-y-3 mt-4">
        {[
          "Parking Available",
          "Wifi",
          "Online Payment",
         
        ].map((service) => (
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

      <button className="w-full px-3 py-2 bg-[var(--surface)] mt-7 
      border text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg)]
       border-[var(--primary)] transition-all duration-300 rounded-[10px] ">
            Clear Filters
      </button>


    
    </div>
  );
}
