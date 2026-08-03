"use client"

import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { BsInstagram, BsTiktok, BsWhatsapp, BsYoutube } from "react-icons/bs";

export default function LogoSec(){
    return(
        <div className="flex flex-col gap-5 items-start">
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
          <p className="text-[15px] text-[var(--secondary-text)] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor 
          </p>
          <div className="flex flex-row gap-3  ">
            <a
              href="#"
              className="border-2 border-[var(--border)] group p-2 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
            >
              <BsInstagram
                size={17}
                className="text-[var(--rose-gold)] group-hover:text-[var(--bg)]"
              />
            </a>
            <a
              href="#"
              className="border-2 border-[var(--border)] group p-2 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
            >
              <BsWhatsapp
                size={17}
                className="text-[var(--rose-gold)] group-hover:text-[var(--bg)]"
              />
            </a>
            <a
              href="#"
              className="border-2 border-[var(--border)] group p-2 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
            >
              <BsTiktok
                size={17}
                className="text-[var(--rose-gold)] group-hover:text-[var(--bg)]"
              />
            </a>
            <a
              href="#"
              className="border-2 border-[var(--border)] group p-2 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
            >
              <BsYoutube
                size={17}
                className="text-[var(--rose-gold)] group-hover:text-[var(--bg)]"
              />
            </a>
          </div>
        </div>
    )
}