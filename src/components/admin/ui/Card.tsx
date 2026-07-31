"use client";

import { ReactNode } from "react";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="px-3.5 w-full  rounded-[3px] mt-5  ">
      <div className="bg-[#ffff] w-full shadow-md  p-5">{children}</div>
    </div>
  );
}
