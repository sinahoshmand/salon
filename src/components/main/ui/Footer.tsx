"use client";

import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import LogoSec from "../footer/LogoSec";
import QuickLink from "../footer/QuickLink";
import ForCustomers from "../footer/ForCustomers";
import ForPartners from "../footer/ForPartners";
import { BsArrowRight } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="container-c pt-7 ">
      <div className="grid grid-cols-5 gap-15">
        <LogoSec />
        <QuickLink />
        <ForCustomers />
        <ForPartners />
        <div className="  flex flex-col mt-3 ">
          <h3 className="text-[18px] font-bold text-[var(--text)]">
            Newsletter
          </h3>

          <p className="mt-2 text-[15px] leading-6 text-[var(--secondary-text)]">
            Subscribe with your email address and receive our latest offers.
          </p>

          <div className="mt-6 flex items-center  ">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[54px] flex-1 rounded-xl 
              border border-[var(--border)] w-[170px] bg-white px-5 
              text-[15px] text-[var(--text)] placeholder:text-[var(--secondary-text)] 
              outline-none transition-all duration-300 focus:border-[#C97B8B] 
              focus:ring-4 focus:ring-[#C97B8B]/15"
            />

            <button
              type="submit"
              className="flex w-full px-4 h-[50px] items-center justify-center rounded-xl bg-[#C97B8B] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            >
              <BsArrowRight size={15} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-[var(--border)] mt-7"></div>
      <div className="grid grid-cols-3 py-5">
        <p className="text-[14px]   text-[var(--text)]">
          © 2026 BeastBeauty. Crafted with care. All rights reserved.
        </p>
        <div></div>
        <p className="text-[14px]  text-right  text-[var(--text)]">
          {" "}
          Designed & Developed with ❤️ by{" "}
          <a
            className="hover:text-[var(--primary)]"
            target="_blank"
            href="https://sinahoushmand.ir"
          >
            Sina Houshmand
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
