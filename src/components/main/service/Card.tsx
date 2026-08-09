import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { FaArrowRight, FaFemale } from "react-icons/fa";

export default function Card() {
  return (
    <Link href={'#'} className="w-full border border-[var(--border)] group shadow-md rounded-[10px]">
      <div className="h-[160px] w-full relative overflow-hidden rounded-t-[10px]">
        <div className="absolute left-3.5 z-20 bottom-4 w-[65px] flex justify-center items-center p-2 h-[65px] rounded-full bg-[var(--surface)]">
             <FaFemale size={30} color="var(--primary)"/>
        </div> 
      <Image
        unoptimized
        src={"/images/service5.jpg"}
        className="h-[160px] scale-100 transition-all 
        duration-300 group-hover:scale-105  object-cover"
        width={800}
        height={600}
        alt="service"
      />
      </div>
      <div className="flex flex-col p-5">
        <h3 className="text-[16px] group-hover:text-[var(--primary)]  text-[var(--text)]  font-bold  ">
          Hair Service
        </h3>
        <p className="text-[14px] text-[var(--secondary-text)] leading-6 mt-2">
          Choose a category to view all availble services
        </p>
        <div className="flex justify-between mt-4 items-center">
            <p className="text-[14px] text-[var(--primary)] font-bold ">12 Services</p>
            <Link href={'#'} className="bg-[var(--primary)] p-3 rounded-[10px]">
                <FaArrowRight className="group-hover:rotate-30 transition-all duration-300"
                 size={14} color="var(--surface)"/>
            </Link>

        </div>
      </div>
    </Link>
  );
}
