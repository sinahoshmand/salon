"use client";
import { Link } from "@/src/i18n/navigation";
import { FaFemale } from "react-icons/fa";
export default function ServiceCard() {
  return (
    <div className="flex flex-col items-center">
      <Link
        href="#"
        className="bg-[var(--primary)]/30 hover:border-[var(--primary)] flex scale-100 transition-all 
        duration-300 hover:scale-110 flex-col  shadow-sm
            items-center justify-center gap-2 py-5 px-4 border-2 w-[90px] h-[90px] border-[var(--border)] rounded-full"
      >
        <FaFemale color="var(--primary)" size={35} />
      </Link>

      <p className="mt-3  text-[15px]  text-[var(--text)]">Hair Styling</p>
    </div>
  );
}
