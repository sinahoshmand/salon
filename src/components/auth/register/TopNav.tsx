"use client"
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useLocale } from "next-intl";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { Link, usePathname, useRouter } from "@/src/i18n/navigation";

export default function TopNav(){
    const[open ,  setOpen] = useState<Boolean>(false)
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const changeLang = (newLocale: string) => {
      
      
        router.replace(
          {
            pathname,
          },
          {
            locale: newLocale,
          }
        );
      };
    return(
         
         <div className="flex items-center justify-end gap-2 mt-10 mr-10">

          
      

         <div className="relative">
           <button
             onClick={() => {
                setOpen((prev) => !prev)
             }}
             className="
             px-4 py-2.5
             rounded-lg
             bg-[var(--bg)]
              shadow-sm
             border
             border-[var(--border)]
             text-[var(--text)]
             text-[14px]
             font-medium
             transition gap-2
             flex items-center
             hover:opacity-90
           "
           >
             <FaGlobe color="var(--text)" size={15} />
             {locale === "en" ? "English" : "فارسی"}
             {open ? (<BiChevronDown color="var(--text)" size={18} />) : (<BiChevronUp color="var(--text)" size={18} />)}
           </button>
           {open &&
           <div className="absolute top-12 left-0 z-20 w-44 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2 shadow-lg">
             <ul className="space-y-1">
               <li>
                 <button
                   onClick={() => changeLang('en')}
                   className={`flex  w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200  hover:bg-[var(--primary)]/10 ${
                     locale === "en"
                       ? "bg-[var(--primary)] text-white"
                       : "text-[var(--text)]"
                   }`}
                 >
                   <span>English</span>
                   <span className="text-xs opacity-70">🇺🇸</span>
                 </button>
               </li>
 
               <li>
                 <button
                  onClick={() => changeLang('fa')}
                   className={`flex   w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-[var(--primary)]/10 ${
                     locale === "fa"
                       ? "bg-[var(--primary)] text-white"
                       : "text-[var(--text)]"
                   }`}
                 >
                   <span>فارسی</span>
                   <span className="text-xs opacity-70">🇮🇷</span>
                 </button>
               </li>
             </ul>
           </div> }
         </div>
 
     
         
 
         <Link href={'/login'}
         
           className="
             px-6 py-2.5
             rounded-lg
             bg-[var(--primary)]
             text-white
             font-medium
             shadow-sm
             transition
             hover:opacity-90
           "
         >
           Login
         </Link>
 
      
         
       </div>
    )
}