"use client";
import { toggleSidebar } from "@/src/redux/sidebarSlice";

import {   BiFullscreen } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { useDispatch } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import { useSession } from "next-auth/react";
import NotificationDropdown from "./NotificationDropdown";

export default function Header() {
  const dispatch = useDispatch();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
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
            <button className="hover:bg-[#F3F3F9] hover:rounded-full p-2">
              <BsMoon size={18} />
            </button>
            <NotificationDropdown/>
            <ProfileDropdown 
              name={String(session?.user?.name)}
              image="/images/profile.png"
              />
         
          </div>
        </div>
      </div>
    </header>
  );
}
