"use client"
import { BiError } from "react-icons/bi";

type Props = {
    mesg : string|null
}

export default function Alert({mesg} : Props) {
  return (
    <div className="flex items-center gap-3 rounded-[10px] border border-[#EF444420] bg-[#EF444410] px-4 py-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EF444420]">
         <BiError color="white" size={20}/>
      </div>

      <p className="text-sm font-medium text-red-300">
         {mesg}
      </p>
    </div>
  );
}
