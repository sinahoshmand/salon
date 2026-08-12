"use client";

import { BiMessage } from "react-icons/bi";

import { FaMapMarkerAlt } from "react-icons/fa";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import Form from "./Form";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), {
  ssr: false,
});


export default function ContactSec() {
  return (
    <section className="container-c mt-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7">
          <div className="bg-[var(--surface)] p-5 rounded-[10px] shadow-md">
            <p className="flex flex-row items-center gap-2 text-[16px] font-bold text-[var(--text)]">
              <BiMessage size={30} color="var(--primary)" />
              Send Us a Message
            </p>
             <Form/>
          
          </div>
        </div>
        <div className="col-span-5">
          <div className="bg-[var(--surface)] p-5 rounded-[10px] shadow-md">
            <p className="flex flex-row items-center gap-2 text-[16px] font-bold text-[var(--text)]">
              <LiaMapMarkerAltSolid size={35} color="var(--primary)" />
              Our Location
            </p>
            <Map/>
          </div>
        </div>
      </div>
    </section>
  );
}
