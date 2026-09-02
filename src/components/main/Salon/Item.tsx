"use client";

import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { FaHeart, FaListAlt, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BiHeart } from "react-icons/bi";
import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import Data from "@/src/types/single-salon.type";
import { formatDollar } from "@/src/helper/price";
export default function Item({ item }: { item: Data }) {
  const [hoverd, setHoverd] = useState<boolean>(false);
  return (
    <div className="flex flex-col mt-6">
      <div
        className="bg-[var(--surface)] hover:shadow-[0_0_10px_var(--primary)] shadow-sm transition-all scale-100 
      hover:scale-102 duration-300 hover:border-[var(--primary)] 
      border border-[var(--border)] rounded-[10px] px-2 py-4"
      >
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4 relative">
            <button className="group absolute top-3 right-8 bg-[var(--surface)] rounded-[6px] p-2">
              <BsHeart
                className="block group-hover:hidden"
                color="var(--primary)"
                size={15}
              />

              <BsHeartFill
                className="hidden group-hover:block"
                color="var(--primary)"
                size={15}
              />
            </button>
            <div
              className={
                "absolute top-3 bg-[var(--bg)] items-center py-1 px-3 rounded-full left-2 flex flex-row gap-2"
              }
            >
              <MdVerified size={12} color={"var(--champagne-gold)"} />
              <p className=" text-[12px] ">Verified</p>
            </div>
            <Image
              unoptimized
              src={item.image}
              className="rounded-[10px] object-cover w-[290px] h-[210px]"
              width={800}
              height={600}
              alt="item"
            />
          </div>
          <div className="col-span-5">
            <div className="flex flex-col  ">
              <Link href={`/salon/${item.slug}`}>
                <h2
                  className="text-[var(--text)] mb-1 
                          transition-all duration-300 hover:text-[var(--primary)] 
                          font-bold text-[22px]"
                >
                  {item.name}
                </h2>
                <span className="  text-[13px] mt-1 items-center text-[var(--secondary-text)] flex gap-1">
                  <FaMapMarkerAlt color="var(--secondary-text)" size={12} />
                  {item.state},{item.city}
                </span>
              </Link>
              <div className="flex flex-row gap-1.5 mt-3 items-center">
                <span className="text-[13px] text-[var(--secondary-text)] font-semibold">
                  {item.ratings}
                </span>
                <Rating
                  style={{ maxWidth: 80 }}
                  value={item.ratings}
                  readOnly
                  itemStyles={{
                    itemShapes: RoundedStar,
                    activeFillColor: "#FACC15",
                    activeStrokeColor: "#EAB308",
                    inactiveFillColor: "#E5E7EB",
                    inactiveStrokeColor: "#D1D5DB",
                  }}
                />
                <span className="text-[13px] text-[var(--secondary-text)]/80 font-semibold">
                  ({item.reviews_count} Reviews)
                </span>
              </div>
              <p
                className="text-[var(--text)] mt-3 
                            text-[14px]"
              >
                {item.address}
              </p>
              <div className="flex flex-row gap-2 flex-wrap mt-3">
                {item?.categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="bg-[var(--rose-gold)]/20  py-1 px-3 shadow-sm rounded-[8px]"
                  >
                    <p className="text-[13px]   text-[var(--primary)]">
                      {cat.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-row items-center gap-4 mt-4">
                <div className="flex flex-row gap-2 items-center">
                  <FaList color="var(--primary)" size={13} />
                  <p className="text-[13px]  text-[var(--secondary-text)]">
                    Parking
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <FaList color="var(--primary)" size={13} />
                  <p className="text-[13px]  text-[var(--secondary-text)]">
                    Women Only
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col items-end mt-5 mr-5">
            <p className="text-[14px] mb-1 text-[var(--secondary-text)]   mt-3">
              Starting From
            </p>
            <strong className="text-[25px] text-right inline-block text-[var(--primary)]">
              {formatDollar(item.start_from_price)}
            </strong>
            <Link
              href={"/salon/number-one"}
              className="w-full text-center bg-[var(--primary)] hover:bg-[var(--rose-gold)] 
               text-[15px] text-[var(--bg)] transition-all duration-300 px-2 py-3 rounded-[10px] mt-5"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
