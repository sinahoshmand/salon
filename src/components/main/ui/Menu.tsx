"use client";
import { Link, usePathname } from "@/src/i18n/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import mainMenus from "@/src/data/mainMenu";
import { FaSearch } from "react-icons/fa";
export default function Menu() {
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
  );
}
