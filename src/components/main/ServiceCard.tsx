"use client"
import { Link } from "@/src/i18n/navigation";
import { FaFemale } from "react-icons/fa";
export default function ServiceCard() {

    return(
     <Link href="#"
        className="bg-[var(--surface)] hover:border-[var(--primary)] flex scale-100 transition-all 
        duration-300 hover:scale-110 flex-col 
            items-center justify-center gap-2 py-5 px-4 border-2 border-[var(--border)] rounded-[13px]"
      >
        <FaFemale color="var(--primary)" size={40} />
        <p className="  text-[15px] mt-1 text-[var(--text)]">
          Hair Styling
        </p>
      </Link>
    )
}