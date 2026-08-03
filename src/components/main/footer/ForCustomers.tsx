"use client"
import { Link } from "@/src/i18n/navigation";
export default function ForCustomers(){
    return(
        <div className="flex flex-col mt-3">
        <h3 className="text-[var(--text)] text-[18px]   font-bold">Quick Links</h3>
        <ul className="flex flex-col gap-2   mt-5">
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[16px] 
             " href={'/'}>
                HowItWorks
            </Link>
         </li>
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[16px] 
            " href={'/'}>
                FindSalons
            </Link>
         </li>
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[16px] 
            " href={'/'}>
                LoyaltyProgram
            </Link>
         </li>
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[16px] 
             " href={'/'}>
                Previews
            </Link>
         </li>
         <li>
            <Link className="text-[var(--secondary-text)] 
            hover:text-[var(--primary)] text-[16px] 
             " href={'/'}>
               FAQs
            </Link>
         </li>
         
    </ul>
    </div>
    )
}