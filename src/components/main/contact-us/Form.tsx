"use client"

import { FaMessage } from "react-icons/fa6";
import { BeatLoader } from "react-spinners";

export default function Form() {
  return (
    <section className="flex flex-col gap-6 mt-6">
      <div className="grid grid-cols-2 gap-6 ">
        <input
          type="text"
          placeholder="First Name"
          className="
          w-full
          py-3
          pl-5
          
          rounded-xl
          bg-[var(--surface)]
          border
          border-[var(--border)]
          text-[var(--secondary-text)]
          placeholder:text-[var(--muted)]
          outline-none
          focus:border-[var(--primary)]
          transition
          "
        />
        <input
          type="text"
          placeholder="Last Name"
          className="
    w-full
    py-3
    pl-5
    
    rounded-xl
    bg-[var(--surface)]
    border
    border-[var(--border)]
    text-[var(--secondary-text)]
    placeholder:text-[var(--muted)]
    outline-none
    focus:border-[var(--primary)]
    transition
    "
        />
      </div>
      <div className="grid grid-cols-2 gap-6  ">
        <input
          type="text"
          placeholder="Email Address"
          className="
          w-full
          py-3
          pl-5
          
          rounded-xl
          bg-[var(--surface)]
          border
          border-[var(--border)]
          text-[var(--secondary-text)]
          placeholder:text-[var(--muted)]
          outline-none
          focus:border-[var(--primary)]
          transition
          "
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="
    w-full
    py-3
    pl-5
    
    rounded-xl
    bg-[var(--surface)]
    border
    border-[var(--border)]
    text-[var(--secondary-text)]
    placeholder:text-[var(--muted)]
    outline-none
    focus:border-[var(--primary)]
    transition
    "
        />
      </div>
      <div className="grid grid-cols-1 gap-6  ">
        <input
          type="text"
          placeholder="Subject"
          className="
          w-full
          py-3
          pl-5
          
          rounded-xl
          bg-[var(--surface)]
          border
          border-[var(--border)]
          text-[var(--secondary-text)]
          placeholder:text-[var(--muted)]
          outline-none
          focus:border-[var(--primary)]
          transition
          "
        />
      
      </div>
      <div className="grid grid-cols-1 gap-6  ">
       
        <textarea
          rows={7}
          placeholder="Your Message"
          className="
    w-full
    py-3
    pl-5
    
    rounded-xl
    bg-[var(--surface)]
    border
    border-[var(--border)]
    text-[var(--secondary-text)]
    placeholder:text-[var(--muted)]
    outline-none
    focus:border-[var(--primary)]
    transition
    "
        ></textarea>
      </div>

      <button
         
          className="
            w-full
            h-12
            flex
            items-center
             justify-center
            mt-2
            rounded-[10px]
            bg-[var(--primary)]
            text-white
            font-semibold
            hover:opacity-90
            transition
            gap-3
            shadow-lg
            shadow-[var(--primary)]/20
            "
        >
          <BeatLoader color="#ffffff" size={13} />  
           <>
            Login
            <FaMessage size={17} color="var(--bg)"/>
           </>
         
        </button>
    </section>
  );
}
