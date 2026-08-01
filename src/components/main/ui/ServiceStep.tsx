"use client";
import { FaArrowRight } from "react-icons/fa";
import { TbBuildingStore } from "react-icons/tb";
export default function ServiceStep() {
  return (
    <div
      className="
        group
        relative
        w-[520px]
        h-[580px]
        rounded-[32px]
        bg-white
        border
        border-gray-100
        p-10
        
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_35px_90px_rgba(0,0,0,.12)]
        overflow-hidden
      "
    >
      {/* Number */}

      <h1
        className="
        absolute
        right-8
        top-5
        text-[120px]
        font-black
        text-[var(--primary)]/10
        leading-none
        select-none
        "
      >
        01
      </h1>

      {/* Icon */}

      <div
        className="
          w-20
          h-20
          rounded-3xl
          bg-[var(--primary)]/10
          flex
          items-center
          justify-center
          group-hover:rotate-6
          transition-all
        "
      >
        <TbBuildingStore size={40} className="text-[var(--primary)]" />
      </div>

      {/* Title */}

      <h2
        className="
          mt-10
          text-4xl
          font-bold
          text-[var(--text)]
        "
      >
        Choose Salon
      </h2>

      <p
        className="
          mt-5
          text-lg
          leading-9
          text-[var(--secondary-text)]
        "
      >
        Browse verified beauty salons near you, compare ratings, explore
        services and choose the perfect place.
      </p>

      {/* Bottom */}

      <div
        className="
          absolute
          bottom-10
          left-10
          right-10
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[var(--primary)]
            font-semibold
          "
        >
          Step 1
        </span>

        <button
          className="
            w-14
            h-14
            rounded-full
            bg-[var(--primary)]
            flex
            items-center
            justify-center
            transition-all
            group-hover:translate-x-2
          "
        >
          <FaArrowRight color="white" />
        </button>
      </div>

      {/* Glow */}

      <div
        className="
          absolute
          -top-20
          -right-20
          w-64
          h-64
          rounded-full
          bg-[var(--primary)]/10
          blur-3xl
        "
      />
    </div>
  );
}
