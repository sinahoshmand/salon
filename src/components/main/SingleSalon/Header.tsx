"use client";

import Image from "next/image";
import BreadCrumb from "../ui/BreadCrumb";
import { BsClock, BsClockFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { FaList, FaMapMarkerAlt } from "react-icons/fa";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BiCalendarEvent } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";
export default function Header() {
  return (
    <div className="grid grid-cols-12 gap-8 mt-6 ">
      <div className="col-span-4 relative">
        <button className="group absolute top-4 right-4 bg-[var(--surface)] rounded-[6px] p-2">
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
            "absolute top-4 bg-[var(--bg)] items-center py-1 px-3 rounded-full left-4 flex flex-row gap-2"
          }
        >
          <MdVerified size={12} color={"var(--champagne-gold)"} />
          <p className=" text-[12px] ">Verified</p>
        </div>
        <Image
          src={"/images/salon.jpg"}
          className="w-full h-[400px] shadow-sm rounded-[10px]"
          width={800}
          height={600}
          alt="salon"
        />
      </div>
      <div className="col-span-5 ">
        <div className="flex flex-col about-banner bg-[var(--surface)] shadow-md border
            border-[var(--border)] rounded-[10px] px-5 py-6">
          <h1 className="text-[var(--text)] text-[30px] font-bold ">
            Luxe Beauty Studio
          </h1>
          <span className="text-[15px] mt-2 items-center text-[var(--secondary-text)] flex gap-1">
            <FaMapMarkerAlt color="var(--secondary-text)" size={15} />
            New York,NY
          </span>
          <div className="flex flex-row gap-1.5 mt-3 items-center">
            <span className="text-[13px] text-[var(--secondary-text)] font-semibold">
              5.0
            </span>
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
            <span className="text-[13px] text-[var(--secondary-text)]/80 font-semibold">
              (324 Reviews)
            </span>
          </div>
          <div className="flex flex-row gap-2 flex-wrap mt-4">
            <div className="bg-[var(--rose-gold)]/20  py-1 px-3 shadow-sm rounded-[8px]">
              <p className="text-[13px]   text-[var(--primary)]">Hair</p>
            </div>
            <div className="bg-[var(--rose-gold)]/20   py-1 px-3 shadow-sm rounded-[8px]">
              <p className="text-[13px]  text-[var(--primary)]">Makeup</p>
            </div>
            <div className="bg-[var(--rose-gold)]/20   py-1 px-3 shadow-sm rounded-[8px]">
              <p className="text-[13px]  text-[var(--primary)]">Nails</p>
            </div>
            <div className="bg-[var(--rose-gold)]/20   py-1 px-3 shadow-sm rounded-[8px]">
              <p className="text-[13px]  text-[var(--primary)]">Facial</p>
            </div>
          </div>
          <p className="mt-5 text-[var(--secondary-text)] leading-6.5 text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
            euismod nisi porta lorem mollis
          </p>
          <div className="flex flex-row items-center gap-4 mt-4">
            <div className="flex flex-row gap-2 border border-[var(--border)] p-2 rounded-[7px] items-center">
              <FaList color="var(--primary)" size={13} />
              <p className="text-[13px]  text-[var(--secondary-text)]">
                Parking
              </p>
            </div>
            <div className="flex flex-row gap-2 border border-[var(--border)] p-2 rounded-[7px] items-center">
              <FaList color="var(--primary)" size={13} />
              <p className="text-[13px]  text-[var(--secondary-text)]">
                Women Only
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 mt-8">
            <button
              className="bg-[var(--primary)] text-[15px] items-center
                 text-[var(--bg)] flex gap-2 rounded-[10px] px-6 py-3"
            >
              Book Appointment
              <BiCalendarEvent color="var(--bg)" size={18} />
            </button>
            <button
              className="bg-[var(--bg)] border border-[var(--primary)] text-[15px] items-center
                 text-[var(--primary)] flex gap-2 rounded-[10px] px-6 py-3"
            >
              Call Now
              <PiPhoneCall color="var(--primary)" size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div
          className="bg-[var(--surface)] about-banner shadow-md border
            border-[var(--border)] rounded-[10px] px-5 py-6"
        >
          <div className="flex gap-3 items-center">
            <BsClockFill color="var(--primary)" size={18} />
            <p className="text-[17px] font-bold text-[var(--text)]">Opening Hours</p>
          </div>
          <div className="flex flex-col mt-6 gap-5">
              {/* item hour */}
              <div className="flex justify-between items-center">
                 <p className="text-[15px]  text-[var(--secondary-text)]">Monday</p>
                 <p className="text-[14px]  text-[var(--text)]">9:00 AM - 8:00 PM</p>
              </div>
              {/* item hour */}
              <div className="flex justify-between items-center">
                 <p className="text-[15px]  text-[var(--secondary-text)]">Tuesday</p>
                 <p className="text-[14px]  text-[var(--text)]">9:00 AM - 8:00 PM</p>
              </div>
              {/* item hour */}
              <div className="flex justify-between items-center">
                 <p className="text-[15px]  text-[var(--secondary-text)]">Wednesday</p>
                 <p className="text-[14px]  text-[var(--text)]">9:00 AM - 8:00 PM</p>
              </div>
              {/* item hour */}
              <div className="flex justify-between items-center">
                 <p className="text-[15px]  text-[var(--secondary-text)]">Thursday</p>
                 <p className="text-[14px]  text-[var(--text)]">9:00 AM - 8:00 PM</p>
              </div>

               {/* item hour */}
               <div className="flex justify-between items-center">
                 <p className="text-[15px]  text-[var(--primary)]">Friday</p>
                 <p className="text-[14px]  text-[var(--primary)]">9:00 AM - 8:00 PM</p>
              </div>
               {/* item hour */}
               <div className="flex justify-between items-center">
                 <p className="text-[15px]  text-[var(--secondary-text)]">Saturday</p>
                 <p className="text-[14px]  text-[var(--text)]">9:00 AM - 8:00 PM</p>
              </div>
               {/* item hour */}
               <div className="flex justify-between items-center">
                 <p className="text-[15px]   text-[var(--secondary-text)]">Sunday</p>
                 <p className="text-[14px]  text-[var(--text)]">9:00 AM - 8:00 PM</p>
              </div>
              <div className="py-10"></div>
              
          </div>
        </div>
      </div>
    </div>
  );
}
