"use client"
import { Link } from "@/src/i18n/navigation";
export default function QuickLink(){
    return(
        <div className="flex flex-col mt-3">
        <h3 className="text-[var(--text)] text-[18px]   font-bold">Quick Links</h3>
        <ul className="flex flex-col gap-2   mt-5">
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[14px] 
             not-odd:" href={'/'}>
                Home
            </Link>
         </li>
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[14px] 
             " href={'/'}>
                Salons
            </Link>
         </li>
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[14px] 
             " href={'/'}>
                Services
            </Link>
         </li>
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[14px] 
             " href={'/'}>
                Pricing
            </Link>
         </li>
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[14px] 
             " href={'/'}>
                AboutUs
            </Link>
         </li>
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[14px] 
             " href={'/'}>
                Contact
            </Link>
         </li>
    </ul>
    </div>
    )
}