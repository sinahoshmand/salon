"use client";

import { Link, usePathname } from "@/src/i18n/navigation";
import Image from "next/image";
import mainMenus from "@/src/data/mainMenu";
import { FaArrowCircleRight, FaSearch, FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const pathname = usePathname();

  return (
    <section className="header-bg w-full  pb-20">
      <div className="container-c h-full">
        <header
          className={`flex z-50 items-center 
          ${
            scrollY > 100
              ? "fixed inset-x-0 top-0 w-full bg-white/80 backdrop-blur-xl shadow-lg px-6"
              : "relative bg-transparent"
          }
            justify-between py-5
             transition-all duration-300 ease-in-out`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center justify-center h-[50px]"
          >
            <Image
              unoptimized
              src="/images/logo3.png"
              width={190}
              height={50}
              alt="logo"
              className="w-full h-[130px] object-contain mt-2"
            />
          </Link>

          {/* Menu */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-10">
              {mainMenus.map((menu) => {
                const active = pathname === menu.href;

                return (
                  <li key={menu.id} className="relative">
                    <Link
                      href={menu.href}
                      className={`
                      text-[16px] font-medium transition-all duration-300
                      ${
                        active
                          ? "text-[var(--primary)]"
                          : "text-[var(--text)] hover:text-[var(--primary)]"
                      }
                    `}
                    >
                      {menu.name}
                    </Link>

                    {active && (
                      <span
                        className="
                      absolute -bottom-3 left-1/2 -translate-x-1/2
                      w-10 h-[3px]
                      rounded-full
                      bg-[var(--primary)]
                    "
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="
              w-10 h-10 rounded-full
              flex items-center justify-center
              hover:bg-black/5 transition
            "
            >
              <FaSearch size={16} />
            </button>

            <button
              className="
              px-6 py-2.5
              rounded-lg
              border border-[var(--border)]
              bg-[var(--bg)]
              text-[var(--primary)]
              font-medium
              transition
              hover:opacity-80
            "
            >
              Login
            </button>

            <button
              className="
              px-6 py-2.5
              rounded-lg
              bg-[var(--primary)]
              text-white
              font-medium
              transition
              hover:opacity-90
            "
            >
              Register
            </button>
          </div>
        </header>
        <div className="grid grid-cols-12 gap-5 mt-8">
          <div className="col-span-12 sm:col-span-5">
            <div
              className="
         opacity-85
    relative
    overflow-hidden
    rounded-[32px]
    border border-white/30
    bg-[var(--bg)]/70
    backdrop-blur-[30px]
    shadow-[0_15px_80px_rgba(255,255,255,.15),0_25px_80px_rgba(0,0,0,.12)]
    px-8
    py-10
  "
            >
              <div className="flex flex-col ">
                <div
                  className="border-[var(--primary)]/70 max-w-max border-1 flex flex-row gap-2 
                items-center rounded-[30px] px-3 py-2"
                >
                  <FaStar color="var(--primary)" size={13} />
                  <p className="text-[var(--primary)] font-bold text-[13px]">
                    Your Beauty , Our Priority
                  </p>
                </div>
                <h1 className="text-[var(--text)] mt-3 text-[45px] font-bold">
                  Book Your Beauty
                </h1>
                <h2 className="text-[var(--text)] text-[45px] font-bold">
                  Appointment
                  <span className="text-[var(--primary)]"> in Secounds</span>
                </h2>
                <p className="  max-w-max mt-3 text-[var(--text)] text-[18px] leading-9">
                  Your beauty, your moment. Schedule your appointment and enjoy
                  a personalized salon experience crafted just for you.
                </p>
              </div>
              <div className="flex flex-row gap-5 mt-6">
                <button
                  className=" px-5 text-[15px] py-3.5
              rounded-[12px]
              items-center
              bg-[var(--primary)]
              text-white
              font-medium
              transition
              hover:opacity-90 flex gap-3"
                >
                  Book Now
                  <BsArrowRight color={"var(--bg)"} size={16} />
                </button>
                <button
                  className=" px-5 text-[15px] py-3.5
              rounded-[12px]
              items-center
              border-2
              border-[var(--primary)]
              text-[var(--primary)]
              font-bold
              transition
              hover:opacity-90 flex gap-3"
                >
                  Explore Salons
                  <BsArrowRight color={"var(--primary)"} size={16} />
                </button>
              </div>
              <div className="flex flex-row gap-4 items-center mt-10">
                <div className="flex">
                  <Image
                    unoptimized
                    alt="customer"
                    className="rounded-full border-3 border-[var(--bg)] w-[40px] h-[40px]"
                    width={50}
                    height={50}
                    src={"/images/profile.jpg"}
                  />
                  <Image
                    unoptimized
                    alt="customer"
                    className="rounded-full -ml-4 border-3 border-[var(--bg)] w-[40px] h-[40px]"
                    width={50}
                    height={50}
                    src={"/images/profile.jpg"}
                  />
                  <Image
                    unoptimized
                    alt="customer"
                    className="rounded-full -ml-4 border-3 border-[var(--bg)] w-[40px] h-[40px]"
                    width={50}
                    height={50}
                    src={"/images/profile.jpg"}
                  />
                  <Image
                    unoptimized
                    alt="customer"
                    className="rounded-full -ml-4 border-3 border-[var(--bg)] w-[40px] h-[40px]"
                    width={50}
                    height={50}
                    src={"/images/profile.jpg"}
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold text-[var(--text)] text-[18px]">
                    20k+
                  </p>
                  <p className="font-bold text-[var(--secondary-text)] text-[16px]">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:col-span-7"></div>
        </div>
      </div>
    </section>
  );
}
