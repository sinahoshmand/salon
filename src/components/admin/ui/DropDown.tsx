"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname: string = usePathname();
  return (
    <div className={`w-full ${open ? 'visible' : 'hidden'} px-3 mt-2`}>
      <ul className="flex flex-col  py-2.5 px-2.5 gap-4.5 bg-[#8B5CF6] rounded-b-[6px]">
        {childs.map((child)=>(
          <Link
             key={child.id}
             className={`${pathname === child.href ? 'text-[#ececec]' : 'text-[#ffff]'} 
             flex items-center gap-2.5 text-[12px]`}
             href={child.href}
           >
             <FaMinus color={pathname === child.href ? '#ececec' : '#ffff'} size={10} />
             <span>{child.name}</span>
           </Link>
        ))}
      </ul>
    </div>
  );
}
