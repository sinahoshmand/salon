"use client"
import { Link } from "@/src/i18n/navigation";
import { FaFemale } from "react-icons/fa";
export default function ServiceCard() {

    return(
        <Link href="#"
        className="bg-[var(--surface)] flex flex-col 
            items-center justify-center gap-2 py-5 px-4 border-2 border-[var(--border)] rounded-[13px]"
      >
        <FaFemale color="var(--primary)" size={40} />
        <p className="font-bold text-[17px] mt-1 text-[var(--text)]">
          Hair Styling
        </p>
      </Link>
    )
}