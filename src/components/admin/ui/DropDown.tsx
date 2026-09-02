"use client";
import { Link, usePathname } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
 
import { FaMinus } from "react-icons/fa";

interface Child {
    id : number,
    name : string,
    href : string
}

type Props = {
    childs : Child[],
    open : Boolean
}

export default function Dropdown({childs , open = false} : Props) {
  const t = useTranslations("adminMenu")
  const pathname: string = usePathname();

   
  return (
    <div className={`w-full ${open ? 'visible' : 'hidden'} px-3 mt-2`}>
      <ul className="flex flex-col  py-2.5 px-2.5 gap-4.5 bg-[#5066A0] rounded-b-[6px]">
        {childs.map((child)=>(
          <Link
             key={child.id}
             className={`${pathname === child.href ? 'text-gray-200' : 'text-[#ffff]'} 
             flex items-center gap-2.5 text-[12px]`}
             href={child.href}
           >
             <FaMinus color={pathname === child.href ? '#ececec' : '#ffff'} size={10} />
             <span>{t(child.name)}</span>
           </Link>
        ))}
      </ul>
    </div>
  );
}
