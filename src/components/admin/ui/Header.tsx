"use client";
import { toggleSidebar } from "@/src/redux/sidebarSlice";

import { BiFullscreen } from "react-icons/bi";
import { BsGlobe, BsMoon } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { useDispatch } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import { useSession } from "next-auth/react";
import NotificationDropdown from "./NotificationDropdown";
import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/navigation";

export default function Header() {
  const dispatch = useDispatch();
  const [open , setOpen] = useState<boolean>(false)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: "fa" | "en") => {
    setOpen(false);

    router.replace(pathname, {
      locale: lang,
    });
  };

  const { data: session, status } = useSession();

  return (
    <header className="w-full ">
      <div className="w-full  bg-[#FFFFFF]   px-3  border-b-2 border-b-[#F3F3F9]">
        <div className="flex justify-between">
          <button onClick={() => dispatch(toggleSidebar())}>
            <MdMenu size={25} />
          </button>
          <div className="flex flex-row gap-4 items-center">
            <button
              onClick={() => {
                toggleFullscreen();
              }}
              className="hover:bg-[#F3F3F9] hover:rounded-full p-2"
            >
              <BiFullscreen size={18} />
            </button>
            <div className="relative">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="p-2 hover:bg-[#F3F3F9] hover:rounded-full transition-all"
              >
                <BsGlobe size={18} />
              </button>

              {open && (
                <div className="absolute right-0 top-12 w-36 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg z-50">
                  <button
                    onClick={() => changeLanguage("fa")}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-[#F3F3F9] ${
                      locale === "fa" ? "bg-[#F3F3F9]" : ""
                    }`}
                  >
                    <span>فارسی</span>
                    {locale === "fa" && <span>✓</span>}
                  </button>

                  <button
                    onClick={() => changeLanguage("en")}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-[#F3F3F9] ${
                      locale === "en" ? "bg-[#F3F3F9]" : ""
                    }`}
                  >
                    <span>English</span>
                    {locale === "en" && <span>✓</span>}
                  </button>
                </div>
              )}
            </div>
            <button className="hover:bg-[#F3F3F9] hover:rounded-full p-2">
              <BsMoon size={18} />
            </button>
            <NotificationDropdown />
            <ProfileDropdown
            role={session?.role}
              name={String(session?.user?.name)}
              image="/images/profile.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
