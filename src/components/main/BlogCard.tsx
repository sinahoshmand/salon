"use client";

import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({ image }: { image: string }) {
  return (
    <div className="group w-full relative h-[230px] shadow-sm overflow-hidden rounded-[20px]">
      <Image
        alt=""
        width={800}
        height={600}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        src={image}
      />

      {/* Overlay */}
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <span className="w-fit px-4 py-1 rounded-full bg-white/90 text-[var(--primary)] text-[11px]  ">
          Hair Care
        </span>
        <Link href={"#"}>
          <h2 className="mt-2 hover:text-[var(--primary)] 
           transition-all duration-300 text-white text-[20px] leading-tight font-bold line-clamp-2">
            5 Ways To Keep your Hair Healthy & Shiny
          </h2>
        </Link>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-white/90 text-[13px] font-semibold">5 min read</p>

          <Link
            href="#"
            className="flex items-center gap-2 text-white text-[13px] font-semibold group/link"
          >
            Read More
            <FaArrowRight
              size={12}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
